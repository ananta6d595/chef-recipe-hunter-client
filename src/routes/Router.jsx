import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Authentication/Login";
import Blog from "../pages/Blog/Blog";
import Registration from "../pages/Authentication/Registration";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path: "chef/:id",
                element: <ChefRecipes></ChefRecipes>,
                loader: ({ params }) =>
                    fetch(
                        `https://chef-recipe-hunter-server-ananta6d595.vercel.app/chefs/${params.id}`
                    ),
            },
        ],
    },
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "registration",
                element: <Registration></Registration>,
            },
        ],
    },
]);