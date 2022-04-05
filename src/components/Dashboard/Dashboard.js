import React from 'react';

// import useData from '../Hooks/useData';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
const data =[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
    return (
        <div className="container">

   <h1 className='text-center mb-5 color'>Investment and Sell</h1>


        <div className='row row-cols-1 row-cols-md-2 g-4  mt-5'>
        
            <div className="col  ">
              <h1>LineChart</h1>
            <LineChart  width={500} height={300} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <YAxis ></YAxis>
                <XAxis dataKey={"month"}></XAxis>
                <Tooltip></Tooltip>
            </LineChart>

            </div>
            <div className="col ">
<h1>BarChart</h1>
            <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
    </BarChart>


            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4  mt-5 ms-5">
           <div className=" col ">
           <PieChart width={1000} height={400}>
      <Pie
        dataKey="revenue"
        isAnimationActive={false}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
     
      <Tooltip />
    </PieChart>
            </div>
            <div className="">
            <div className="col  ms-5">

            <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="month" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="revenue" dataKey="revenue" stroke="red" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="investment" dataKey="investment" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>

            </div>
            </div>
           </div>

        </div>

        </div>
    );
};

export default Dashboard;