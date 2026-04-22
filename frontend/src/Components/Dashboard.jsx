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
        navigate('login');
    }
    return (
        <div>
            <h1>Dashboard.</h1>
        </div>
    );
};

export default Dashboard;