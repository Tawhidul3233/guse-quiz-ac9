import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topic from '../components/Topic/Topic';

const Router = () => {
     const router = createBrowserRouter([
          {path: '/Topic' , element: <Topic></Topic>}
     ])
     return (
          <div>
               <RouterProvider router={router}> </RouterProvider>
          </div>
     );
};

export default Router;