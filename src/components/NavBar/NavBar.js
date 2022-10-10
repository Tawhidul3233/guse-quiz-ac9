import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import NavItem from '../NavItem/NavItem';

const NavBar = () => {

     const [Open , setOpen] = useState(false)

     const routes = [
          {id:1, name:'Home' , path:'/Home'},
          {id:2, name:'Product' , path:'/Product'},
          {id:3, name:'Orders' , path:'/Orders'},
          {id:4, name:'About' , path:'/About'},
          {id:5, name:'Contact' , path:'/Contact'}
     ]

     return (
          <nav className=' bg-blue-400 w-full py-1  '>
               <div onClick={()=> setOpen(!Open)} className="h-6 w-6 m-2 md:hidden">
                    {
                         Open ? <XMarkIcon /> : <Bars3Icon />
                    }
               </div>
               <div className=' grid grid-cols-3 items-center justify-center '>
                    <ul className={` col-span-2 justify-center md:flex absolute md:static bg-blue-400 duration-500  w-full ${ Open ? 'top-8' : 'top-[-250px]'}`}>
                         {    
                              routes.map(route => <NavItem key={route.id} route={route}> </NavItem>)
                         }
                    </ul>
                    <div className=' text-white text-center hidden md:block text-2xl font-semibold'> 
                         Guess Quiz
                    </div>
               </div>
          </nav>
     );
};

export default NavBar;