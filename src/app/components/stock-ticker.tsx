import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "../contexts/language-context";

export function StockTicker() {
  const { t } = useLanguage();

  // Mock stock data
  const stockData = {
    symbol: "2001.SR",
    price: "16.85",
    change: "+0.42",
    changePercent: "+2.56%",
    isPositive: true,
    lastUpdated: "Jan 28, 2026 15:30 AST",
  };

  const tickerContent = (
    <>
      <div className="flex items-center gap-2">
        <span className="font-bold text-neutral-600">CHEMANOL</span>
        <span className="text-neutral-500">{stockData.symbol}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="font-bold text-neutral-900">SAR {stockData.price}</span>
        <div className={`flex items-center gap-1 ${stockData.isPositive ? "text-green-600" : "text-red-600"}`}>
          {stockData.isPositive ? (
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={1.5} />
          ) : (
            <TrendingDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          )}
          <span className="font-bold">{stockData.change}</span>
          <span className="font-bold">({stockData.changePercent})</span>
        </div>
      </div>
      <div className="text-neutral-500">
        {t("stockTicker.lastUpdated")} {stockData.lastUpdated}
      </div>
    </>
  );

  return (
    <div className="bg-neutral-100/80 backdrop-blur-sm border-b border-neutral-200/50">
      <style>{`
        @keyframes stockTickerMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mx-auto max-w-[1440px] px-4 py-2 sm:px-6 lg:px-8 xl:px-12">
        <div className="hidden min-[800px]:flex min-[800px]:items-center min-[800px]:justify-between min-[800px]:gap-6 text-xs sm:text-sm">
          <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1.5">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="font-bold text-neutral-600">CHEMANOL</span>
              <span className="text-neutral-500">{stockData.symbol}</span>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="font-bold text-neutral-900">SAR {stockData.price}</span>
              <div className={`flex items-center gap-1 ${stockData.isPositive ? "text-green-600" : "text-red-600"}`}>
                {stockData.isPositive ? (
                  <TrendingUp className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <TrendingDown className="h-4 w-4" strokeWidth={1.5} />
                )}
                <span className="font-bold">{stockData.change}</span>
                <span className="font-bold">({stockData.changePercent})</span>
              </div>
            </div>
          </div>
          <div className="shrink-0 whitespace-nowrap text-[11px] text-neutral-500 sm:text-xs">
            {t("stockTicker.lastUpdated")} {stockData.lastUpdated}
          </div>
        </div>

        <div className="min-[800px]:hidden overflow-hidden text-[11px] leading-none">
          <div
            className="flex w-max items-center gap-8 whitespace-nowrap"
            style={{ animation: "stockTickerMarquee 18s linear infinite" }}
          >
            <div className="flex items-center gap-8 px-1">
              {tickerContent}
            </div>
            <div className="flex items-center gap-8 px-1" aria-hidden="true">
              {tickerContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}