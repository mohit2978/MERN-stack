import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import ErrorPage from "./Error/Error.jsx";
import Body from "./Body/Body.jsx";
import RestaurantDetails from "./Resturant page/RestaurantDetails.jsx";

const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
            path: "/about",
            element:<AboutUs/>
            },
            {
                path: "/contact",
                element:<ContactUs/>
            },
            {
                path:"restuarants/:resName",
                element:<RestaurantDetails/>
            }
            ],
        errorElement:<ErrorPage/>
    }

]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter}/>

)
