import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useBitcoinStore } from '../store/store';
import { formatTimeAgo } from './timeHelper'; 
import './TableCard.css';

function TableCard() {
    const { latestBlocks, isLoading } = useBitcoinStore();

    if (isLoading || latestBlocks.length === 0) {
        return (
            <SkeletonTheme baseColor="rgba(255, 255, 255, 0.3)" highlightColor="rgba(255, 255, 255, 0.7)">
                <div className="blocks-container">
                    <div className="blocks-header">
                        {/* Placeholder for "Latest Blocks" title */}
                        <Skeleton width={150} height={24} />
                    </div>
                    <table className="blocks-table">
                        <thead>
                            <tr>
                                <th><Skeleton width={60} /></th>
                                <th><Skeleton width={100} /></th>
                                <th><Skeleton width={80} /></th>
                                <th><Skeleton width={60} /></th>
                                <th><Skeleton width={80} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map 5 empty rows to simulate table data loading */}
                            {[1, 2, 3, 4, 5].map((row) => (
                                <tr key={row}>
                                    <td><Skeleton width={90} height={18} /></td>
                                    <td><Skeleton width={120} height={18} /></td>
                                    <td><Skeleton width={70} height={18} /></td>
                                    <td><Skeleton width={80} height={18} /></td>
                                    <td><Skeleton width={60} height={18} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </SkeletonTheme>
        );
    }

    return (
        <div className="blocks-container">
            <div className="blocks-header">
                <h3>Latest Blocks</h3>
            </div>
            <table className="blocks-table">
                <thead>
                    <tr>
                        <th>#Block</th>
                        <th>Miner</th>
                        <th>Transactions</th>
                        <th>Time</th>
                        <th>Reward</th>
                    </tr>
                </thead>
                <tbody>
                    {latestBlocks.map((block) => (
                        <tr key={block.height}>
                            <td className="block-height">
                                {/* Simple inline SVG for the cube icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cube-icon">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                                {block.height}
                            </td>
                            <td>{block.extras?.pool?.name || 'Unknown Miner'}</td>
                            <td>{block.tx_count} txns</td>
                            <td className="time-col">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="clock-icon">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                {formatTimeAgo(block.timestamp)}
                            </td>
                            {/* Mempool gives reward in satoshis, so we divide by 100 million to get BTC */}
                            <td>{(block.extras?.reward / 100000000).toFixed(5)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCard;