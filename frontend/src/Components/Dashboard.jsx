import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Chart from './Chart';
import api from '../Services/api';

const Dashboard = () => {
    const [currentPrice, setCurrentPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-semibold">
                    Moneys are printing...
                </p>
            </div>
        );
    }

    if (!user) {
        navigate('/login');
        return null;
    }

    const handleBuy = async () => {
        if (!currentPrice) {
            alert("Price not ready yet");
            return;
        }

        if (!quantity || quantity <= 0) {
            alert("Enter valid quantity");
            return;
        }

        try {
            const res = await api.post('/api/trades/buy', {
                userId: user.uid,
                price: currentPrice,
                quantity,
            });


            alert("Buy successful!");

        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong");
            }
        }
    };

    const handleSell = async () => {
        if (!currentPrice) {
            alert("Price not ready yet");
            return;
        }

        try {
            const res = await api.post('/api/trades/sell', {
                userId: user.uid,
                price: currentPrice,
            });

            const data = res.data;

            alert(`Sell successful! Profit: ${data.profit.toFixed(2)}`);

        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[90vh]">

                {/* Chart */}
                <div className="md:col-span-3 border border-gray-500 flex flex-col p-3 min-h-[400px]">
                    <h2 className="text-sm text-gray-400 mb-2">Chart</h2>
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        <Chart setCurrentPrice={setCurrentPrice} />
                    </div>
                </div>

                {/* Right panel */}
                <div className="md:col-span-1 flex flex-col gap-4">

                    {/* Portfolio */}
                    <div className="border border-gray-500 p-3">
                        <h2 className="text-sm text-gray-400 mb-2">Portfolio</h2>
                        <p>Balance: $0</p>
                        <p>Position: 0</p>
                        <p>P&amp;L: $0</p>
                    </div>

                    {/* Trade Panel */}
                    <div className="border border-gray-500 p-3">
                        <h2 className="text-sm text-gray-400 mb-2">Trade Panel</h2>

                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-full mb-2 p-2 bg-transparent border border-gray-600 outline-none"
                        />

                        <div className="flex gap-2">
                            <button onClick={handleBuy} className="flex-1 border border-green-500 text-green-500 py-2 hover:bg-green-500 hover:text-black transition">
                                BUY
                            </button>
                            <button onClick={handleSell} className="flex-1 border border-red-500 text-red-500 py-2 hover:bg-red-500 hover:text-black transition">
                                SELL
                            </button>
                        </div>
                    </div>

                </div>

                {/* Trade history */}
                <div className="md:col-span-4 border border-gray-500 p-3 overflow-x-auto">
                    <h2 className="text-sm text-gray-400 mb-2">Trade History</h2>

                    <table className="w-full text-sm min-w-[600px]">
                        <thead>
                            <tr className="border-b border-gray-600 text-left">
                                <th>Type</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>P&amp;L</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="6" className="text-center text-gray-500 py-3">
                                    No trades yet
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;