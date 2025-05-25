import { createBrowserRouter, } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    },
]);

export default router; 