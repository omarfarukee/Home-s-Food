
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
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
