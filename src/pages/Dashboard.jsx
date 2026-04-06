import React, { useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useBitcoinStore } from "../store/store";
import { Link } from "react-router-dom";
import './Dashboard.css';
import StatGrid from "../components/StatGrid";
import ChartCard from "../components/ChartCard";
import TableCard from "../components/TableCard";
import Marquee from "../components/Marquee";

function Dashboard() {
    const { fetchDashboardData } = useBitcoinStore();

    useEffect(() => {
        fetchDashboardData();

        const interval = setInterval(() => {
            fetchDashboardData();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchDashboardData]);

    return (
        <>
        <Marquee />
        <div className="dashboard">
            <div className="top-grid">
                    <StatGrid />
                <ChartCard />
            </div>
            <TableCard />
            <div className="back-btn">
                <button>
                    <Link to="/">← Back</Link>
                </button>
            </div>
        </div>
        </>
    );
}

export default Dashboard;