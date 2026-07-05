import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, TrendingUp } from 'lucide-react';
import heroBgPath from '@assets/generated_images/hero-chart-bg.jpg';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-24 pb-12 flex flex-col justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url(${heroBgPath})` }}
        />
        {/* Gradients to blend image into background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium tracking-wide">8+ Years of Proven Market Edge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] mb-6"
          >
            Where Serious Traders <br className="hidden md:block" />
            <span className="gradient-text">Find Their Edge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by over 10,00,000+ professionals globally. Institutional-grade execution,
            razor-thin spreads, and unwavering reliability in Forex, Crypto, and Commodities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#register"
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:bg-primary/90 shadow-[0_0_20px_rgba(240,165,0,0.2)] hover:shadow-[0_0_30px_rgba(240,165,0,0.4)] active:scale-95 group"
            >
              Open Live Account
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-white/10 glass-panel font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:bg-white/5 active:scale-95"
            >
              Try Demo Account
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-positive/20 flex items-center justify-center text-positive">
                <TrendingUp size={12} />
              </div>
              Zero Commission
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-positive/20 flex items-center justify-center text-positive">
                <TrendingUp size={12} />
              </div>
              Instant Execution
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-white/5 bg-background/50 backdrop-blur-xl overflow-hidden z-20 pause-on-hover">
        <Ticker />
      </div>
    </section>
  );
}
