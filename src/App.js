import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';




function App() {
  const router = createBrowserRouter([
    { path:'/' , 
    element: <Layout> </Layout>,
    children: [
      {path:'/', 
      loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Home> </Home>},
      {path:'Blog' , element: <Blog> </Blog>},
      {path:'Statistics',
      loader:()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Statistics> </Statistics>},
      {path:'/quiz/:quizId',
        loader:({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz> </Quiz>
    },
    
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

