import React from 'react';
import { Link } from 'react-router-dom';


const EachTopic = ({EachData}) => {
     const { logo , name, id } = EachData;
    
     return (
          <div className='border-2 rounded-md flex bg-blue-100'>
               <div className='w-2/5'>
                    <img className=' ' src={logo} alt="" />
               </div>
               <div className='m-auto text-left '>
                    <h1 className=' text-4xl'> {name}</h1>
                    <p className=' my-4 text-2xl'>Question :  </p>
                    <Link to={`/quiz/${id}`}> <button className=' uppercase  bg-indigo-500 text-white py-2 px-8 rounded-md'> Start Quiz </button> </Link>
               </div>
          </div>
     );
};

export default EachTopic;