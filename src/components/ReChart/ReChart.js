import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';

const ReChart = ({eachData}) => {
     const {total} = eachData
     // console.log(total)
     return (
          <div>
               <h1 className='  my-5 text-6xl font-semibold'> Line Chart </h1>
               <div className=' flex justify-around my-5'>
               <LineChart width={900} height={500} data={total}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8"> </Line>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
               </LineChart>
          </div>
          </div>
     );
};

export default ReChart;