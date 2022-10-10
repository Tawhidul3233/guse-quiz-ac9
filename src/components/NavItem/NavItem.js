import React from 'react';

const NavItem = ({route}) => {
     return (
          <div>
               <li className='m-5 '>
                    <a href={route.path}>{route.name}</a>
               </li>
          </div>
     );
};

export default NavItem;
