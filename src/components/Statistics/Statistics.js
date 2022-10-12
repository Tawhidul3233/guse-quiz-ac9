import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReChart from '../ReChart/ReChart';

const Statistics = () => {
     const allData = useLoaderData();
     const Data = allData.data
     return (
          <div>
               {
                    Data.map(eachData => <ReChart key={eachData.id} eachData={eachData}> </ReChart>)
               }
          </div>
     );
};

export default Statistics;