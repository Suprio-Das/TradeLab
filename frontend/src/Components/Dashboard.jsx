import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[90vh]">

                {/* Chart */}
                <div className="col-span-3 bg-gray-800">Chart</div>

                {/* Right panel */}
                <div className="col-span-1 flex flex-col gap-4">

                    <div className="bg-gray-700 flex-1">Portfolio</div>

                    <div className="bg-gray-700 flex-1">Trade Panel</div>

                </div>

                {/* Trade history */}
                <div className="col-span-4 bg-gray-800">Trade History</div>

            </div>
        </div>
    );
};

export default Dashboard;