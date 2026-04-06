import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
import './StatCard-1.css';
import bitcoin from "../assets/bitcoin.png"; 

function StatCard1() {
    const { btcPrice, isLoading, fetchDashboardData } = useBitcoinStore();
    useEffect(() => {
        fetchDashboardData();

        const interval = setInterval(() => {
            fetchDashboardData();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchDashboardData]);

    if (isLoading && !btcPrice) {
        return <div className="card"><p>Loading...</p></div>;
    }

    return (
        <div className="card-1">
            <section className="card-header">
                <img src={bitcoin} alt="Bitcoin" className="bitcoin-icon" />
                <h4>Bitcoin Price</h4>
            </section>
            <section className="card-content">
                <h3>${btcPrice?.toLocaleString()}</h3>
                <hr />
                <p>BTC rate has increased</p>
            </section>
        </div>
    )
};

export default StatCard1;