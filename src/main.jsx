import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Layout/Main';
import Restuarent from './components/Restuarent/Restuarent';
import Error from './components/Error/Error';
import MealDetail from './components/MealDetail/MealDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children: [
      {
        path: '/',
        element: <Main/>
      },
      {
        path: '/restaurant',
        element: <Restuarent></Restuarent>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
      },
      {
        path: '/meal/:mealId',
        element: <MealDetail></MealDetail>,
        // loader: ({params}) => console.log(params.mealId)
        // loader: fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52893`)
        // loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a/${params.mealId}`)
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      // {
      //   path: '*',
      //   element: <Error></Error>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
