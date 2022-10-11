import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopic from '../EachTopic/EachTopic';
import Header from '../Header/Header';

const Topic = () => {
     const quizData = useLoaderData();
     const topics = quizData.data
     // console.log(topics.id)
     return (
          <div>
               <Header> </Header>
               {
                    quizData.map(Each => <EachTopic quizData={quizData} > </EachTopic>)
               }
          </div>
     );
};

export default Topic;