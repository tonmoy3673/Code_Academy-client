import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import Course from "../Pages/Course/Course";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('https://code-academy-server-theta.vercel.app/course')
            },
            {
                path:'/category/:id',
               element:<Categories></Categories>,
               loader:({params})=>fetch(`https://code-academy-server-theta.vercel.app/category/${params.id}`)
            },

            {
            path: "/course/:id",
            element:<PrivateRoute> <Course/></PrivateRoute>,
            loader: ({ params }) =>fetch(`https://code-academy-server-theta.vercel.app/course/${params.id}`)
            },
            
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])