import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';




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

                    <li className='m-5'><Link to="/"> Topic</Link></li>
                    <li className='m-5'><Link to="Blog"> Blog</Link></li>
                    <li className='m-5'><Link to="Statistics"> Statistics</Link></li>
                    <li className='m-5'><Link to="Contact"> Contact</Link></li>
                    <li className='m-5'><Link to="About"> About</Link></li>

                    </ul>
                    <div className=' text-white text-center hidden md:block text-2xl font-semibold'> 
                         Guess Quiz
                    </div>
               </div>
          </nav>
     );
};

export default NavBar;