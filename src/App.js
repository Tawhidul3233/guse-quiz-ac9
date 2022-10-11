import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Topic from './components/Topic/Topic';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';



function App() {
  const router = createBrowserRouter([
    { path:'/' , 
    element: <Layout> </Layout>,
    children: [
      {path:'/', element: <Topic> </Topic>},
      {path:'Blog' , element: <Blog> </Blog>},
      {path:'Statistics', element: <Statistics> </Statistics>}
    ]
  },
    { path:'*', element: <div> error </div>}
  ])



  return (
    <div className="App">
        <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;

