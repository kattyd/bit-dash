import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useBitcoinStore } from '../store/store';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './ChartCard.css';
function ChartCard() {
    const { chartData, isLoading } = useBitcoinStore();

    if (isLoading || !chartData) {
        return (
            <SkeletonTheme baseColor="rgba(255, 255, 255, 0.3)" highlightColor="rgba(255, 255, 255, 0.7)">
                {/* Keep the glass card container so the background matches */}
                <div className="chart-card">
                    <header className="chart-header">
                        {/* Placeholder for the "Price History" title */}
                        <Skeleton width={200} height={24} />
                    </header>
                    <div className="chart-wrapper">
                        {/* Placeholder for the actual graph area */}
                        <Skeleton height="100%" borderRadius={8} />
                    </div>
                </div>
            </SkeletonTheme>
        );
    }

    return (
        <div className="chart-card">
            <header className="chart-header">
                <h3>Price History in 14 Days</h3>
            </header>
            
            {/* ResponsiveContainer makes the chart fit your CSS grid automatically */}
            <div className="chart-wrapper">
                <ResponsiveContainer>
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        {/* THIS IS THE MAGIC GRADIENT */}
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fbc6c2" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#C3CFE8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        
                        {/* Remove axis lines and ticks to match the clean UI in the image */}
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#8b949e', fontSize: 12}} />
                        <YAxis hide={true} domain={['dataMin', 'dataMax']} /> {/* Hiding Y axis to keep it clean, but scaling it to the data */}
                        
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#151b28', borderColor: '#2d3748', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fbc6c2' }}
                        />
                        
                        {/* type="monotone" makes the line curved instead of jagged */}
                        <Area 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#db939f" 
                            strokeWidth={3}
                            fillOpacity={1} 
                            fill="url(#colorPrice)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ChartCard;