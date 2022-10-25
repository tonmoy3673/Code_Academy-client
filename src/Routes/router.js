import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
               path:'/' ,
               element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
        ]
    }
])