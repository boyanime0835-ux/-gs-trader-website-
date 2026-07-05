import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Markets', href: '#markets' },
    { name: 'Courses', href: '#courses' },
    { name: 'Platform', href: '#platform' },
    { name: 'Company', href: '#company' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-white/10 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xl transition-transform group-hover:scale-105">
            GS
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-foreground">
            TRADEWITHGS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="#login" className="text-sm font-semibold hover:text-primary transition-colors">
              Log In
            </a>
            <a
              href="#register"
              className="px-5 py-2.5 rounded-sm bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(240,165,0,0.3)] hover:shadow-[0_0_25px_rgba(240,165,0,0.5)] active:scale-95"
            >
              Start Trading
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px w-full bg-white/10 my-2" />
          <div className="flex flex-col gap-4">
            <a
              href="#login"
              className="text-center py-3 font-semibold border border-white/10 rounded-sm"
            >
              Log In
            </a>
            <a
              href="#register"
              className="text-center py-3 bg-primary text-primary-foreground font-semibold rounded-sm"
            >
              Start Trading
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
