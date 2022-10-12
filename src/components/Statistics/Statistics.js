import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
     const allData = useLoaderData();
     const Data = allData.data
     return (
          <div>
               <h1 className='  my-5 text-2xl font-semibold'> No. of question line chart </h1>
               <div className=' flex justify-around my-5'>
                    <ResponsiveContainer width='70%' height={400}>
                         <LineChart data={Data}>
                              <Line type="monotone" dataKey="total" stroke="#8884d8"> </Line>
                              <XAxis dataKey="name" />
                              <YAxis/>
                              <CartesianGrid stroke="#ccc" />
                              <Tooltip />
                              </LineChart>
                    </ResponsiveContainer>
                    
               </div>
          </div>
     );
};

export default Statistics;