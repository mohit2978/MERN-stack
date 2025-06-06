import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import ErrorPage from "./Error/Error.jsx";

const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement:<ErrorPage/>
    },
    {
        path: "/about",
        element:<AboutUs/>
    },
    {
        path: "/contact",
        element:<ContactUs/>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>
)
