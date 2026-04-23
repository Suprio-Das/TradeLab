import React, { useEffect, useRef } from 'react';
import { CandlestickSeries, createChart } from 'lightweight-charts';

const Chart = () => {
    const chartRef = useRef();

    useEffect(() => {
        if (!chartRef.current) return;

        const chart = createChart(chartRef.current, {
            width: chartRef.current.clientWidth,
            height: 400,
            layout: {
                background: { color: '#111827' },
                textColor: '#D1D5DB',
            },
            grid: {
                vertLines: { color: '#1F2937' },
                horzLines: { color: '#1F2937' },
            },
        });

        // CandleStick Series
        const candleSeries = chart.addSeries(CandlestickSeries);

    }, []);

    return (
        <div ref={chartRef} className="w-full h-full" />
    );
};

export default Chart;