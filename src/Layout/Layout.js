import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';


const Layout = () => {
     return (
          <div>
               <NavBar> </NavBar>
               <Outlet> </Outlet>
          </div>
     );
};

export default Layout;