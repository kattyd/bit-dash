import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
import './StatCard-4.css';
import bitcoin from "../assets/bitcoin.png";

function StatCard4() {
    const { lastBlock, isLoading, fetchDashboardData } = useBitcoinStore();
    useEffect(() => {
        fetchDashboardData();

        const interval = setInterval(() => {
            fetchDashboardData();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchDashboardData]);

    if (isLoading && !lastBlock) {
        return <div className="card"><p>Loading...</p></div>;
    }

    return (
        <div className="card-4">
            <section className="card-header">
                <img src={bitcoin} alt="Bitcoin" className="bitcoin-icon" />
                <h4>Last Block</h4>
            </section>
            <section className="card-content">
                <h3>{lastBlock?.toLocaleString()}</h3>
                <hr />
                <p>BTC rate has increased</p>
            </section>
        </div>
    )
};

export default StatCard4;