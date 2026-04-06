import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useBitcoinStore } from "../store/store";
import './StatGrid.css';
import money from "../assets/money.png";
import exchange from "../assets/swap.png";
import graph from "../assets/api.png";
import pickaxe from "../assets/mint.png";
import { title } from "framer-motion/client";

function StatGrid() {
    const { btcPrice, fees, marketCap, lastBlock, isLoading, fetchDashboardData } = useBitcoinStore();

    const statData = [
        {
            id: 1,
            title: "Bitcoin Price",
            value: btcPrice ? `$${btcPrice.toLocaleString()}` : "Loading...",
            icon: money,
            subText: "BTC rate has increased"
        },
        {
            id: 2,
            title: "Fees",
            value: fees ? `${fees.halfHourFee} sat/vB` : "Loading...",
            icon: exchange,
            subText: "BTC rate has increased"
        },
        {
            id: 3,
            title: "Market Cap",
            value: marketCap ? marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 }) : "Loading...",
            icon: graph,
            subText: "BTC rate has increased"
        },
        {
            id: 4,
            title: "Last Finalized Block",
            value: lastBlock ? lastBlock.toLocaleString() : "Loading...",
            icon: pickaxe,
            subText: "BTC rate has increased"
        }
        
    ];

    if (isLoading) {
        return (
            <SkeletonTheme baseColor="rgba(255, 255, 255, 0.3)" highlightColor="rgba(255, 255, 255, 0.7)">
                <div className="card-grid">
                    {/* We map an array of 4 empty items to generate 4 skeleton cards */}
                    {[1, 2, 3, 4].map((item) => (
                        <div className="card card-1" key={item}>
                            <div className="card-header">
                                {/* The Icon Placeholder */}
                                <Skeleton circle width={40} height={40} />
                                {/* The Title Placeholder */}
                                <Skeleton width={120} height={20} style={{ marginTop: '1rem', marginLeft: '10px' }} />
                            </div>
                            <div className="card-content">
                                {/* The Big Number Placeholder */}
                                <Skeleton width="70%" height={32} style={{ marginTop: '10px', marginLeft: '10px' }} />
                                <hr />
                                {/* The Subtitle Placeholder */}
                                <Skeleton width="40%" height={16} style={{ marginLeft: '10px' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </SkeletonTheme>
        )
    }
    return (
        <div className="card-grid">
            {statData.map((stat, index) => (
            <div className="card" key={stat.id || index}>
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