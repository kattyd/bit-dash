import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
import './StatGrid.css';
import bitcoin from "../assets/bitcoin.png";
import exchange from "../assets/exchange.png";
import graph from "../assets/graph.png";
import pickaxe from "../assets/pickaxe.png";
import { title } from "framer-motion/client";

function StatGrid() {
    const { btcPrice, fees, marketCap, lastBlock, isLoading, fetchDashboardData } = useBitcoinStore();

    const statData = [
        {
            id: "price",
            title: "Bitcoin Price",
            value: btcPrice ? `$${btcPrice.toLocaleString()}` : "Loading...",
            icon: bitcoin,
            subText: "BTC rate has increased"
        },
        {
            id: "fees",
            title: "Fees",
            value: fees ? `${fees.halfHourFee} sat/vB` : "Loading...",
            icon: exchange,
            subText: "BTC rate has increased"
        },
        {
            id: "mcap",
            title: "Market Cap",
            value: marketCap ? marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "Loading...",
            icon: graph,
            subText: "BTC rate has increased"
        },
        {
            id: "blocks",
            title: "Last Finalized Block",
            value: lastBlock ? lastBlock.toLocaleString() : "Loading...",
            icon: pickaxe,
            subText: "BTC rate has increased"
        }
        
    ];

    if (isLoading) {
        return <div className="stat-grid loading"><p>Loading...</p></div>;
    }
    return (
        <div className="card-grid">
            {statData.map(stat => (
            <div className="card">
                <section className="card-header">
                    <img src={stat.icon} alt="Bitcoin" className="bitcoin-icon" />
                    <h4>{stat.title}</h4>
                </section>
                <section className="card-content">
                    <h3>{stat.value}</h3>
                    <hr />
                    <p>{stat.subText}</p>
                </section>
            </div>
            ))}
        </div>
    );
}

export default StatGrid;