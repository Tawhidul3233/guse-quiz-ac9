import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'


const Question = ({allQuestion}) => {
     const {id , question, options, correctAnswer } = allQuestion


     const clickHandler = (values)=>{
          
          if(values === correctAnswer){
               alert('Congratulation Right Answer')
          }else{
               alert('Opps! Wrong Answer')
          }
     }

     const clickHandel = (orpp)=> {
          alert( `Correct Answer : ${orpp}`)
     }

     return (
          <div className='m-auto md:w-2/3'>
               <div className='  m-5  border-4  p-5 rounded-md border-b-blue-400 border-r-cyan-600'>
                    <h1 className='text-2xl '> {question.slice(3, -4)}</h1>
                    <div className=' h-5 w-5 ml-auto '>
                         <EyeIcon onClick={()=>{clickHandel(correctAnswer)}} className=''></EyeIcon>
                    </div>
                    <div className=' grid grid-cols-2 '>
                         <div className=' grid gap-5 m-5'>
                              <div className=' hover:bg-blue-400 p-3 rounded-md border-2'>
                                   <button onClick={()=> clickHandler(options[0])} className=''> {options[0]} </button>
                              </div>
                              <div className='hover:bg-blue-400  p-3 rounded-md  border-2'>
                                   <button onClick={()=> clickHandler(options[1])}> {options[1]} </button>
                              </div>
                         </div>
                         <div className='grid gap-5 m-5'>
                             <div className='hover:bg-blue-400  p-3 rounded-md  border-2'>
                                   <button onClick={()=> clickHandler(options[2])}> {options[2]} </button>
                             </div>
                              <div className='hover:bg-blue-400  p-3 rounded-md  border-2'>
                                   <button onClick={()=> clickHandler(options[3])}> {options[3]} </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Question;