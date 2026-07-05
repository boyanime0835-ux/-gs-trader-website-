import { motion } from 'framer-motion';
import { Monitor, Smartphone, Terminal } from 'lucide-react';

export default function Platforms() {
  return (
    <section className="py-24 relative bg-card overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Trade Your Way. <br className="hidden md:block" />
            Anywhere, Anytime.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Access the markets through industry-standard platforms trusted by millions of professional traders worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* MT4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-xl flex flex-col items-center text-center border-t border-t-primary/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 mb-6">
              <Terminal size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">MetaTrader 4</h3>
            <p className="text-sm text-muted-foreground mb-8 flex-1">
              The world's most popular trading platform. Renowned for its advanced technical analysis, flexible trading system, and Expert Advisors (EAs).
            </p>
            <button className="w-full py-3 rounded-sm bg-white/5 hover:bg-white/10 font-semibold transition-colors text-sm">
              Download MT4
            </button>
          </motion.div>

          {/* MT5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-xl flex flex-col items-center text-center border-t border-t-primary shadow-[0_-5px_30px_-15px_rgba(240,165,0,0.3)] transform md:-translate-y-4 bg-background/60"
          >
            <div className="absolute -top-3 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">
              Recommended
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-amber-600/20 border border-primary/30 flex items-center justify-center text-primary mb-6">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">MetaTrader 5</h3>
            <p className="text-sm text-muted-foreground mb-8 flex-1">
              The next-generation multi-asset platform. Features an advanced DOM, more timeframes, and superior back-testing capabilities.
            </p>
            <button className="w-full py-3 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-colors text-sm shadow-[0_0_15px_rgba(240,165,0,0.2)]">
              Download MT5
            </button>
          </motion.div>

          {/* Web/Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-xl flex flex-col items-center text-center border-t border-t-purple-500/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Web & Mobile</h3>
            <p className="text-sm text-muted-foreground mb-8 flex-1">
              Trade directly from your browser or on-the-go with our native iOS and Android apps. Never miss a market movement.
            </p>
            <div className="flex w-full gap-2">
              <button className="flex-1 py-3 rounded-sm bg-white/5 hover:bg-white/10 font-semibold transition-colors text-sm">
                Web
              </button>
              <button className="flex-1 py-3 rounded-sm bg-white/5 hover:bg-white/10 font-semibold transition-colors text-sm">
                App
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
