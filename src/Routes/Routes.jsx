import { createBrowserRouter, } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Components/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    },
]);

export default router; 