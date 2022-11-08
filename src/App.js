
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './page/Blog/Blog';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import MoreDetails from './page/MoreDetails/MoreDetails';
import MyReview from './page/MyReview/MyReview';
import Register from './page/Register/Register';
import ViewAllFood from './page/ViewAllFood/ViewAllFood';
import PrivateRoute from './Privaite/PrivateRoute';

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
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/review',
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
          path:'/foods',
          element:<ViewAllFood></ViewAllFood>,
        },
        {
          path:'/foods/:id',
          element:<MoreDetails></MoreDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
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
