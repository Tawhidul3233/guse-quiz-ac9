import React from 'react';

const EachTopic = ({EachData}) => {
     const { logo , name } = EachData;
    
     return (
          <div className='border-2 rounded-md flex'>
               <div className='w-2/5'>
                    <img className=' ' src={logo} alt="" />
               </div>
               <div className='m-auto text-left '>
                    <h1 className=' text-4xl'> {name}</h1>
                    <p className=' my-4 text-2xl'>Question : </p>
                    <button className=' uppercase border bg-indigo-500 text-white py-2 px-8 rounded-md'> Start Quiz </button>
               </div>
          </div>
     );
};

export default EachTopic;