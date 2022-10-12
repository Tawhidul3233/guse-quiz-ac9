import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';




const NavBar = () => {

     const [Open , setOpen] = useState(false)

     return (
          <nav className=' bg-blue-400 w-full py-1  '>
               <div onClick={()=> setOpen(!Open)} className="h-6 w-6 m-2 md:hidden">
                    {
                         Open ? <XMarkIcon /> : <Bars3Icon />
                    }
               </div>
               <div className=' grid grid-cols-3 items-center  '>
                    <ul className={` py-2 col-span-2 justify-center md:flex absolute md:static bg-blue-400 duration-500  w-full ${ Open ? 'top-8' : 'top-[-250px]'}`}>

                    <li className='m-5'><NavLink   to="/"> Home </NavLink></li>
                    <li className='m-5'><NavLink className={({isActive})=> isActive ? ' text-white ' : undefined} to="Blog"> Blog</NavLink></li>
                    <li className='m-5'><NavLink className={({isActive})=> isActive ? ' text-white' : undefined} to="Statistics"> Statistics</NavLink></li>
                    <li className='m-5'><NavLink className={({isActive})=> isActive ? ' text-white' : undefined} to="About"> About</NavLink></li>

                    </ul>
                    <div className=' text-white hidden md:block text-2xl font-semibold'> 
                         <h1 >Guess Quiz</h1>
                    </div>
               </div>
          </nav>
     );
};

export default NavBar;