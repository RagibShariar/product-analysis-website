import React, { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
  const [myChart, setMyChart] = useState([]);

  // load json data
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setMyChart(data));
  }, []);

  return (
    <div className='chart-wrapper container'>
      <div className='chart'>
          <h5 className='text-center text-danger mb-5 mt-5 '>MONTH WISE SELL</h5>
      <LineChart
        width={600}
        height={400}
        data={myChart}
        margin={{ top: 0, right: 100, left: 0, bottom: 10 }}
      >
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="month" />
        <YAxis  />
        {/* <YAxis dataKey="sell" /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      </LineChart>
      </div>

    <div className='chart'>
    <h5 className='text-center text-danger mb-4 mt-5'>Investment VS Revenue</h5>
    <AreaChart
        width={700}
        height={400}
        data={myChart}
        margin={{ top: 50, right: 100, left: 100, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
      
    </div>
  );
};

export default Dashboard;
