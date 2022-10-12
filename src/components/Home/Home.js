import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopic from '../EachTopic/EachTopic';
import Header from '../Header/Header';

const Home = () => {
     const  topics= useLoaderData();
     const quizData = topics.data
     return (
          <div>
               <Header> </Header>
               <div className='grid md:grid-cols-2 my-10 mx-4 gap-10 '>
               {
                    quizData.map(EachData => <EachTopic key={EachData.id} EachData={EachData} > </EachTopic>) 
               }
          </div>
          </div>
     );
};

export default Home;