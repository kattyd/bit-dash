import { create } from "zustand";

export const useBitcoinStore = create((set) => ({
    btcPrice: null,
    fees: null,
    marketCap: null,
    lastBlock: null,
    isLoading: true,
    chartData: [],
    latestBlocks: [],

    fetchDashboardData: async () => {
        set({ isLoading: true });
        try {
            const [priceRes, feesRes, blockRes, chartRes, blocksRes] = await Promise.all([
                fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true'),
                fetch('https://mempool.space/api/v1/fees/recommended'),
                fetch('https://mempool.space/api/blocks/tip/height'),
                fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily'),
                fetch('https://mempool.space/api/v1/blocks')
            ]);

            const priceData = await priceRes.json();
            const feesData = await feesRes.json();
            const blockData = await blockRes.text();
            const chartDataRaw = await chartRes.json();
            const blocksData = await blocksRes.json();

            const formattedChartData = chartDataRaw.prices.map((item) => {
                const date = new Date(item[0]);
                return {
                    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    price: Math.round(item[1])
                };
            });

            set({
                btcPrice: priceData.bitcoin.usd,
                marketCap: priceData.bitcoin.usd_market_cap, // NEW
                fees: feesData,
                lastBlock: Number(blockData),
                isLoading: false,
                chartData: formattedChartData,
                latestBlocks: blocksData.slice(0, 6)
            });
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
            set({ isLoading: false });
        }
    }
}));