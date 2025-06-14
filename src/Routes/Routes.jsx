import { createBrowserRouter, } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServicesDetails from "../Pages/servicesDetails/servicesDetails";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoutes from "./Private/PrivateRoutes";
import CardDetails from "../Pages/CardDetails/CardDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/servicesDetails/:id",
                element: <ServicesDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoutes><Checkout /></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/cardDetails",
                element: <PrivateRoutes><CardDetails /></PrivateRoutes>,

            }
        ]
    },
]);

export default router; 