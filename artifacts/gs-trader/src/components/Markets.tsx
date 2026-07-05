import { motion } from 'framer-motion';
import { LineChart, Bitcoin, Globe, BarChart3, ArrowUpRight } from 'lucide-react';

export default function Markets() {
  const markets = [
    {
      id: 'forex',
      title: 'Forex',
      icon: <Globe className="w-8 h-8 text-primary" />,
      desc: 'Trade major, minor, and exotic currency pairs with ultra-low spreads starting from 0.0 pips. Maximum leverage up to 1:500.',
      pairs: ['EUR/USD', 'GBP/JPY', 'USD/CHF']
    },
    {
      id: 'crypto',
      title: 'Cryptocurrency',
      icon: <Bitcoin className="w-8 h-8 text-primary" />,
      desc: 'Access the volatile crypto markets 24/7. Trade Bitcoin, Ethereum, and major altcoins with deep institutional liquidity.',
      pairs: ['BTC/USD', 'ETH/USD', 'SOL/USD']
    },
    {
      id: 'stocks',
      title: 'Stock Market',
      icon: <LineChart className="w-8 h-8 text-primary" />,
      desc: 'Invest in top global companies. Trade CFDs on Apple, Tesla, Amazon, and leading indices like NIFTY 50 and S&P 500.',
      pairs: ['AAPL', 'TSLA', 'NIFTY50']
    },
    {
      id: 'commodities',
      title: 'Commodities',
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      desc: 'Hedge against inflation. Trade Gold, Silver, Crude Oil, and Natural Gas with competitive margins and zero swap fees.',
      pairs: ['XAU/USD', 'USOIL', 'XAG/USD']
    }
  ];

  return (
    <section id="markets" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            One Account. <br/>
            <span className="text-muted-foreground">Every Major Market.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Diversify your portfolio across 500+ instruments. We provide the infrastructure; you bring the strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {markets.map((market, idx) => (
            <motion.div
              key={market.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-background p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-lg bg-card border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {market.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3">{market.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {market.desc}
                </p>
                
                <div className="flex items-center gap-2">
                  {market.pairs.map(pair => (
                    <span key={pair} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-foreground/80 border border-white/5">
                      {pair}
                    </span>
                  ))}
                  <span className="text-xs text-primary ml-2 font-medium">Explore All +</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
