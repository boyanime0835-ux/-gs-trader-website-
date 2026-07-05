import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration, suffix = "", prefix = "" }: { from: number, to: number, duration: number, suffix?: string, prefix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let start = from;
    const end = to;
    if (start === end) return;

    const totalMilSecDur = duration * 1000;
    const incrementTime = (totalMilSecDur / end) * 5; // Adjust speed
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      label: "Active Traders",
      value: 1000000,
      suffix: "+",
      prefix: "",
      desc: "Trusted by over 10 Lakh+ professionals globally",
    },
    {
      label: "Years of Excellence",
      value: 8,
      suffix: "+",
      prefix: "",
      desc: "Proven track record in volatile markets",
    },
    {
      label: "Daily Volume",
      value: 5,
      suffix: "B+",
      prefix: "$",
      desc: "Deep liquidity and lightning-fast execution",
    },
    {
      label: "Instruments",
      value: 500,
      suffix: "+",
      prefix: "",
      desc: "Across Forex, Crypto, Stocks & Commodities",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,165,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-lg border border-white/5 relative group hover:border-primary/30 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                <Counter from={0} to={stat.value} duration={2} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
