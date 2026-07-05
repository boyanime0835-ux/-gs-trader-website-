import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="company" className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center font-display font-bold text-primary-foreground transition-transform hover:scale-105">
                GS
              </div>
              <span className="font-display font-bold text-lg tracking-wide text-foreground">
                TRADEWITHGS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Empowering global traders with institutional-grade technology, razor-thin spreads, and unwavering reliability since 2016.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Markets</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Forex Trading</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cryptocurrencies</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Stock Indices</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Commodities</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trading Conditions</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">MetaTrader 4</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">MetaTrader 5</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">WebTrader</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">API Trading</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">proboizgs788@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="https://wa.me/919619340680?text=Hi%20TradeWithGS%2C%20I%20am%20interested%20in%20your%20trading%20course!" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 96193 40680</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Risk Warning */}
        <div className="pt-8 border-t border-white/5 mb-8 text-xs text-muted-foreground/60 leading-relaxed text-justify">
          <strong className="text-muted-foreground">Risk Warning:</strong> Trading foreign exchange (Forex) and Contracts for Differences (CFDs) is highly speculative, carries a high level of risk and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital, therefore, you should not speculate with capital that you cannot afford to lose. You should be aware of all the risks associated with trading on margin. This website is marketing material and is not intended to be provided to residents in countries where its use would contravene local laws or regulations. TradeWithGS does not provide services to residents of the USA, Canada, Japan, and certain other regions.
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/80">
          <p>© {currentYear} TradeWithGS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
