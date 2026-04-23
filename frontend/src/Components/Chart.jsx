import React, { useEffect, useRef } from 'react';

const Chart = () => {
    const chartRef = useRef();

    return (
        <div ref={chartRef} className="w-full h-full" />
    );
};

export default Chart;