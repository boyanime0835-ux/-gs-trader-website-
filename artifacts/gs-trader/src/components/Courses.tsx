import { motion } from 'framer-motion';
import { Clock, Phone, TrendingUp, Brain, BarChart2, Layers, ChevronRight } from 'lucide-react';

const courses = [
  {
    title: 'Beginner Course',
    duration: '3 Months',
    price: '₹30,000',
    level: 'Beginner',
    icon: TrendingUp,
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-400',
    description: 'Master the fundamentals of trading — charts, order types, market structure, risk management, and your first live trades.',
  },
  {
    title: 'Beginner Level Up',
    duration: '3 Months',
    price: '₹32,000',
    level: 'Beginner+',
    icon: TrendingUp,
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/20 hover:border-sky-500/50',
    badge: 'bg-sky-500/10 text-sky-400',
    description: 'Build on the basics with deeper technical analysis, refined entry/exit strategies, and advanced position sizing.',
  },
  {
    title: 'Intermediate',
    duration: 'Full Course',
    price: '₹40,000',
    level: 'Intermediate',
    icon: BarChart2,
    color: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    badge: 'bg-violet-500/10 text-violet-400',
    description: 'Dive into multi-timeframe analysis, confluence trading, institutional patterns, and building a consistent trading system.',
  },
  {
    title: 'Advanced',
    duration: 'Full Course',
    price: '₹50,000',
    level: 'Advanced',
    icon: Layers,
    color: 'from-primary/20 to-primary/5',
    border: 'border-primary/20 hover:border-primary/50',
    badge: 'bg-primary/10 text-primary',
    description: 'Elite-level strategies, prop firm preparation, advanced risk frameworks, and live market execution mentorship.',
    featured: true,
  },
  {
    title: 'Trading Psychology',
    duration: '1 Month',
    price: '₹15,000',
    level: 'All Levels',
    icon: Brain,
    color: 'from-rose-500/20 to-rose-500/5',
    border: 'border-rose-500/20 hover:border-rose-500/50',
    badge: 'bg-rose-500/10 text-rose-400',
    description: 'Overcome emotional trading, build discipline, control FOMO and revenge trading, and develop a professional trader mindset.',
  },
  {
    title: 'Fibonacci Retracement',
    duration: '1 Month',
    price: '₹15,000',
    level: 'All Levels',
    icon: BarChart2,
    color: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    badge: 'bg-amber-500/10 text-amber-400',
    description: 'Full theory, drawing techniques, and extensive live market practice using Fibonacci tools across Forex, Crypto & Stocks.',
  },
  {
    title: 'SMC — Smart Money Concepts',
    duration: '6 Months',
    price: '₹50,000',
    level: 'Pro',
    icon: Layers,
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-400',
    description: 'The most comprehensive SMC program — Order Blocks, Breaker Blocks, Liquidity Sweeps, Inducements, ICT concepts & live trading sessions.',
    wide: true,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-28 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(240,165,0,0.06),transparent)]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-primary/30 text-primary mb-5">
            Learn From The Best
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight">
            Courses Built for{' '}
            <span className="gradient-text">Real Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            8+ years of market expertise distilled into structured programs — from your first chart to
            professional-grade Smart Money Concepts.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-xl border bg-gradient-to-b ${course.color} ${course.border} transition-all duration-300 p-7 flex flex-col gap-5 group${course.wide ? ' md:col-span-2 lg:col-span-3' : ''}`}
              >
                {/* Featured badge */}
                {course.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(240,165,0,0.4)]">
                    Most Popular
                  </div>
                )}

                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-foreground/80" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.badge}`}>
                    {course.level}
                  </span>
                </div>

                {/* Title & desc */}
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  <span>{course.duration}</span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/5" />

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-3xl font-display font-bold text-foreground">
                      {course.price}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">/ course</span>
                  </div>
                  <a
                    href="https://wa.me/919619340680?text=Hi%20TradeWithGS%2C%20I%20am%20interested%20in%20your%20trading%20course!"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95 group/btn"
                  >
                    Enroll Now
                    <ChevronRight size={15} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground mb-5 text-base">
            Have questions about which course is right for you?
          </p>
          <a
            href="https://wa.me/919619340680?text=Hi%20TradeWithGS%2C%20I%20am%20interested%20in%20your%20trading%20course!"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-card border border-white/10 hover:border-primary/40 transition-all duration-200 group shadow-[0_0_30px_-10px_rgba(240,165,0,0.2)] hover:shadow-[0_0_40px_-10px_rgba(240,165,0,0.4)]"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Call / WhatsApp us directly</p>
              <p className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                +91 96193 40680
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
