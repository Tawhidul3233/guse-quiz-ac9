import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Topic from './components/Topic/Topic';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';



function App() {
  const router = createBrowserRouter([
    { path:'/' , 
    element: <Layout> </Layout>,
    children: [
      {path:'/', 
      loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Topic> </Topic>},
      {path:'Blog' , element: <Blog> </Blog>},
      {path:'Statistics', element: <Statistics> </Statistics>}
    ]
  },
    { path:'*', element: <Error> </Error> }
  ])



  return (
    <div className="App">
        <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;

