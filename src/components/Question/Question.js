import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({allQuestion}) => {
     const {id , question, options } = allQuestion

     console.log(options[0])
     return (
          <div className='m-auto md:w-2/3'>
               <div className='  m-5  border-4  p-5'>
                    <h1 className='text-3xl '>{question}</h1>
                    <div className=' flex h-5 w-5 ml-auto'>
                         <EyeIcon className='flex items-center'></EyeIcon>
                    </div>
                    <div className=' grid grid-cols-1'>
                         <div className='flex justify-around'>
                              <button className=' border-2 p-3 m-4 '>1. {options[0]} </button>
                              <button className=' border-2 p-3 m-4 '>2. {options[1]} </button>
                         </div>
                         <div className='flex justify-around  '>
                              <button className=' border-2 p-3 m-4 '>3. {options[2]} </button>
                              <button className=' border-2 p-3 m-4 '>4. {options[3]} </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Question;