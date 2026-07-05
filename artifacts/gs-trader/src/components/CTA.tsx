import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-background border border-primary/20 p-8 md:p-16 text-center shadow-[0_0_50px_-15px_rgba(240,165,0,0.15)]"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to take control of your trades?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join 10,00,000+ traders who have already chosen TradeWithGS as their trusted partner in the financial markets. Account opening takes less than 3 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto px-8 py-4 rounded-sm bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-primary/90 shadow-[0_0_20px_rgba(240,165,0,0.3)] active:scale-95 group"
              >
                Create Free Account
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <p className="text-sm text-muted-foreground sm:hidden mt-2">No hidden fees. Cancel anytime.</p>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground hidden sm:flex">
              <span>✓ Fast Verification</span>
              <span>✓ Secure Funding</span>
              <span>✓ 24/5 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
