import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useReviews from '../../hooks/useReviews';

const Dashboard = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center h-screen'>
                <div className='grid grid-cols-1 items-center'>
                    <ResponsiveContainer width="100%" height="80%">
                        <PieChart>
                            <Pie data={reviews} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#261a72" />
                            <Pie data={reviews} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#ff5959" label />
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='grid grid-cols-1 items-center px-2 py-4 md:py-40 lg:px-28 lg:py-44'>
                    <ResponsiveContainer width="100%" height="80%">
                        <AreaChart data={reviews}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#261a72" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart> 
                    </ResponsiveContainer>
                </div> 
                       
        </div>
    );
};

export default Dashboard;