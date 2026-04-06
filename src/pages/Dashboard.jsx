import React, { useEffect } from "react";
import { useBitcoinStore } from "../store/store";
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
                <div className="stat-grid">
                    <StatGrid />
                </div>
                <ChartCard />
            </div>
        </div>
        <TableCard />
        </>
    );
}

export default Dashboard;