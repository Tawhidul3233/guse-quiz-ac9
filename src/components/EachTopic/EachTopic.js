import React from 'react';

const EachTopic = ({EachData}) => {
     const { id , logo , name } = EachData;
    
     return (
          <div className='border-2'>
               <div>
                    <img src={logo} alt="" />
               </div>
               <div>
                    <h1>{name}</h1>
                    <p>Number of Question</p>
                    <button>Start Quiz</button>
               </div>
          </div>
     );
};

export default EachTopic;