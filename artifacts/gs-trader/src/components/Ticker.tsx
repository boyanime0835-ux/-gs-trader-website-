import { motion } from 'framer-motion';

const pairs = [
  { symbol: 'EUR/USD', price: '1.0942', change: '+0.12%', positive: true },
  { symbol: 'BTC/USD', price: '64,230.50', change: '+2.45%', positive: true },
  { symbol: 'XAU/USD', price: '2,341.80', change: '-0.34%', positive: false },
  { symbol: 'NIFTY50', price: '22,450.25', change: '+0.88%', positive: true },
  { symbol: 'GBP/USD', price: '1.2650', change: '-0.15%', positive: false },
  { symbol: 'USD/JPY', price: '154.20', change: '+0.05%', positive: true },
  { symbol: 'ETH/USD', price: '3,120.40', change: '+1.20%', positive: true },
  { symbol: 'CRUDEOIL', price: '82.40', change: '-1.10%', positive: false },
  { symbol: 'BANKNIFTY', price: '48,200.10', change: '+1.02%', positive: true },
  { symbol: 'AAPL', price: '172.50', change: '+0.55%', positive: true },
];

// Duplicate for seamless loop
const tickerItems = [...pairs, ...pairs];

export default function Ticker() {
  return (
    <div className="flex whitespace-nowrap py-3 items-center w-[200%]">
      <div className="animate-ticker flex w-1/2 justify-around">
        {tickerItems.slice(0, pairs.length).map((item, idx) => (
          <TickerItem key={`a-${idx}`} item={item} />
        ))}
      </div>
      <div className="animate-ticker flex w-1/2 justify-around">
        {tickerItems.slice(pairs.length).map((item, idx) => (
          <TickerItem key={`b-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TickerItem({ item }: { item: typeof pairs[0] }) {
  return (
    <div className="flex items-center gap-3 px-6 border-r border-white/5 last:border-0 cursor-default">
      <span className="font-semibold text-sm text-foreground/90">{item.symbol}</span>
      <span className="font-mono text-sm">{item.price}</span>
      <span 
        className={`font-mono text-xs px-1.5 py-0.5 rounded-sm ${
          item.positive 
            ? 'bg-positive/10 text-positive' 
            : 'bg-destructive/10 text-destructive'
        }`}
      >
        {item.change}
      </span>
    </div>
  );
}
