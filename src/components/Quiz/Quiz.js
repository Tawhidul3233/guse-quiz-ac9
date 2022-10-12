import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
     const allData = useLoaderData();
     const data = allData.data
     const {name, questions} = data
     console.log(questions )
     return (
          <div>
               <div className=''>
                   <h1 className='text-4xl m-5'>{name}</h1>
                   <p className='text-2xl'>Number of Questions : {questions.length}</p>
                   {
                    questions.map(allQuestion => <Question key={allQuestion.id} allQuestion={allQuestion}> </Question>)
                   }
               </div>
          </div>
     );
};

export default Quiz;