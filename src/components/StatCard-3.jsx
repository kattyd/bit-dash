import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
import './StatCard-3.css';
import bitcoin from "../assets/bitcoin.png";

function StatCard3() {
    const { marketCap, isLoading, fetchDashboardData } = useBitcoinStore();
    useEffect(() => {
        fetchDashboardData();

        const interval = setInterval(() => {
            fetchDashboardData();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchDashboardData]);

    if (isLoading && !marketCap) {
        return <div className="card"><p>Loading...</p></div>;
    }

    return (
        <div className="card-3">
            <section className="card-header">
                <img src={bitcoin} alt="Bitcoin" className="bitcoin-icon" />
                <h4>Market Cap</h4>
            </section>
            <section className="card-content">
                <h3>{marketCap?.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
                <hr />
                <p>BTC rate has increased</p>
            </section>
        </div>
    )
};

export default StatCard3;