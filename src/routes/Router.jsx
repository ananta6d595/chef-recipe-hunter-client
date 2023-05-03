import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginLayout from "../layouts/LoginLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
            },
        ],
    },
]);