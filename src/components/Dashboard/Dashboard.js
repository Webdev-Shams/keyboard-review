import React from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Funnel, FunnelChart, LabelList, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, Treemap, XAxis, YAxis } from 'recharts';
import useReviews from '../../hooks/useReviews';
import './Dashboard.css'

const Dashboard = () => {
    const [reviews, setReviews] = useReviews();
    return (
        
        <div className='chartsContainer'>
            <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-9'>Welcome to Dashboard</h1>
            <div className='charts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center'>
                <div className='grid grid-cols-1 items-center'>
                    <ResponsiveContainer width="100%" height="80%">
                        <PieChart>
                            <Pie data={reviews} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#261a72" />
                            <Pie data={reviews} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#61dafb" label />
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='grid grid-cols-1 items-center px-2 py-4 md:py-40 lg:px-28 lg:py-9'>
                    <ResponsiveContainer width="100%" height="80%">
                        <ComposedChart width={730} height={250} data={reviews}>
                            <XAxis dataKey="investment" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <CartesianGrid stroke="#f5f5f5" />
                            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                            </ComposedChart>
                    </ResponsiveContainer>
                </div> 
                       
            </div>
        </div>
    );
};

export default Dashboard;