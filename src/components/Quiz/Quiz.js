import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
     const datat = useLoaderData();
     const datas = datat.data
     const {name, questions, id} = datas
     console.log(questions )
     return (
          <div>
               <div className=''>
                   <h1 className='text-4xl m-5'>{name}</h1>
                   <p className='text-2xl'>Number of Questions : {questions.length}</p>
                   {
                    questions.map(allQuestion => <Question key={id} allQuestion={allQuestion}> </Question>)
                   }
               </div>
          </div>
     );
};

export default Quiz;