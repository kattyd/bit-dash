import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
import './StatCard-2.css';
import bitcoin from "../assets/bitcoin.png";

function StatCard2() {
    const { fees, isLoading, fetchDashboardData } = useBitcoinStore();
    useEffect(() => {
        fetchDashboardData();

        const interval = setInterval(() => {
            fetchDashboardData();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchDashboardData]);

    if (isLoading && !fees) {
        return <div className="card"><p>Loading...</p></div>;
    }

    return (
        <div className="card-2">
            <section className="card-header">
                <img src={bitcoin} alt="Bitcoin" className="bitcoin-icon" />
                <h4>Fees</h4>
            </section>
            <section className="card-content">
                <h3>{fees?.halfHourFee} sat/vB</h3>
                <hr />
                <p>BTC rate has increased</p>
            </section>
        </div>
    )
};

export default StatCard2;