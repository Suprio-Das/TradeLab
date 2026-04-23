import React, { useEffect, useRef } from 'react';
import { CandlestickSeries, createChart } from 'lightweight-charts';
import { generateInitialData } from '../Utils/dataGenerator';

const Chart = ({ setCurrentPrice }) => {
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

        // Generate initial data
        const initialData = generateInitialData(50);
        candleSeries.setData(initialData);

        // Set Initial Data to dashboard
        let lastCandle = initialData[initialData.length - 1];
        if (setCurrentPrice) {
            setCurrentPrice(lastCandle.close);
        }

    }, [setCurrentPrice]);

    return (
        <div ref={chartRef} className="w-full h-full" />
    );
};

export default Chart;