import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useReviews from '../../hooks/useReviews';

const Dashboard = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>

            <div>
                <PieChart width={730} height={250}>
                    <Pie data={reviews} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={reviews} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip/>
                </PieChart>

            </div>
            <div>

                <AreaChart width={550} height={250} data={reviews}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
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

            </div>
            
        </div>
    );
};

export default Dashboard;