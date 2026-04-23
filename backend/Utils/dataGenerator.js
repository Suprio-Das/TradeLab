export function generateInitialData(count = 50, startPrice = 100) {
    const data = [];
    let lastClose = startPrice;

    for (let i = 0; i < count; i++) {
        const open = lastClose;

        const change = (Math.random() - 0.5) * 4;
        const close = open + change;

        const high = Math.max(open, close) + Math.random() * 2;
        const low = Math.min(open, close) - Math.random() * 2;

        data.push({
            time: i,
            open,
            high,
            low,
            close,
        });

        lastClose = close;
    }

    return data;
}

export function generateNextCandle(prevCandle, time) {
    const open = prevCandle.close;

    const change = (Math.random() - 0.5) * 4;
    const close = open + change;

    const high = Math.max(open, close) + Math.random() * 2;
    const low = Math.min(open, close) - Math.random() * 2;

    return {
        time,
        open,
        high,
        low,
        close,
    };
}