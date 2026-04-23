import React, { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';
import { generateInitialData, generateNextCandle } from '../utils/dataGenerator';

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

        let time = initialData.length;

        // updates
        const interval = setInterval(() => {
            const newCandle = generateNextCandle(lastCandle, time);

            candleSeries.update(newCandle);

            lastCandle = newCandle;
            time++;

            // send price to dashboard
            if (setCurrentPrice) {
                setCurrentPrice(newCandle.close);
            }

        }, 1000);

        return () => {
            clearInterval(interval);
            chart.remove();
        };

    }, [setCurrentPrice]);

    return (
        <div ref={chartRef} className="w-full h-full" />
    );
};

export default Chart;