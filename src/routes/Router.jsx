import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Authentication/Login";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Recipes/Recipes";
import Registration from "../pages/Authentication/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
            },
            {
                path: "recipe",
                element: <Recipes></Recipes>
            }
        ],
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/registration",
                element:<Registration></Registration>
            },
        ],
    },
]);