import { motion } from 'framer-motion';
import { Shield, Zap, Target, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Execution",
      desc: "Sub-millisecond execution speeds backed by Tier-1 liquidity providers. No requotes, no delays."
    },
    {
      icon: <Shield size={24} />,
      title: "Institutional Security",
      desc: "Client funds are kept in segregated accounts with top-tier international banks. 256-bit SSL encryption."
    },
    {
      icon: <Target size={24} />,
      title: "Raw Spreads",
      desc: "Direct market access means you get the truest prices. Spreads starting from exactly 0.0 pips."
    },
    {
      icon: <Lock size={24} />,
      title: "Negative Balance Protection",
      desc: "Trade with peace of mind knowing you can never lose more than your initial deposit."
    }
  ];

  return (
    <section id="platform" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase mb-6"
            >
              The GS Trader Advantage
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Engineered for <br/>
              <span className="text-primary">Performance.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              We stripped away the gimmicks to build a trading environment that focuses purely on execution speed, pricing transparency, and rock-solid stability. 
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#register" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group">
                Compare Account Types
                <span className="block transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="p-6 rounded-xl bg-card/50 border border-white/5 hover:bg-card transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
