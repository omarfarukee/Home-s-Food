
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Header from './page/Header/Header';
import Home from './page/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div>
          <RouterProvider router={router}>

          </RouterProvider>
    </div>
  );
}

export default App;
