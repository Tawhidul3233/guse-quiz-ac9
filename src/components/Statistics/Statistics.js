import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import ReChart from '../ReChart/ReChart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';

const Statistics = () => {
     const allData = useLoaderData();
     const Data = allData.data
     const {total} = Data
     return (
          <div>
               
               <h1 className='  my-5 text-4xl font-semibold'> No. of question line chart </h1>
               <div className=' flex justify-around my-5'>
               <LineChart width={900} height={500} data={Data}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8"> </Line>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
               </LineChart>
               </div>

               {/* {
                    Data.map(eachData => <ReChart key={eachData.id} eachData={eachData}> </ReChart>)
               } */}
          </div>
     );
};

export default Statistics;