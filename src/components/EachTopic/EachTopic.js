import React from 'react';
import { Link } from 'react-router-dom';
import { ForwardIcon, ArrowUturnRightIcon } from '@heroicons/react/24/solid'


const EachTopic = ({EachData}) => {
     const { logo , name, id, total } = EachData;
    
     return (
          <div className='border-2 rounded-md flex bg-blue-100'>
               <div className='w-2/5'>
                    <img className=' ' src={logo} alt="" />
               </div>
               <div className='m-auto text-left '>
                    <h1 className=' text-4xl'> {name}</h1>
                    <p className='flex items-center my-4 text-2xl'>No of Q :  <ArrowUturnRightIcon className='h-5 m-2'></ArrowUturnRightIcon> {total} </p>
                    <Link to={`/quiz/${id}`}> <button className=' flex items-center uppercase  bg-indigo-500 text-white py-2 px-8 rounded-md'> Start Quiz<ForwardIcon className='h-4 pl-2'></ForwardIcon> </button> </Link>
               </div>
          </div>
     );
};

export default EachTopic;