import React from 'react'


const Header = () => {
     return (
          <div className='md:flex m-5 border border-x-indigo-500'>
               <div className=' md:w-1/3 ' >
                    <img className=' m-auto h-80 w-full' src="./img/images.png" alt="" />
               </div>
               <div className='md:w-2/3 p-6 m-auto'>
                    <h1 className=' text-indigo-500 mb-2 uppercase text-4xl font-semibold'> 
                         Play Quiz Show your Knowlege
                    </h1>
                    <p>General awareness is valued information regarding the social interests of society, community or nation gathered from a range of various media platforms. There are numerous ways by which one can improve its General knowledge. Hence it would be accurate to say that general knowledge covers almost all the aspects of human life. </p>
                    <div className='mt-4'> 
                         <button className='border bg-indigo-500 text-white py-2 px-5 rounded-md'> Start Quiz </button>
                         <button className=' border-4 border-indigo-500 mx-5 py-1 px-4 rounded-md mt-3'>Read More</button>
                    </div>
               </div>
               
          </div>
     );
};

export default Header;
