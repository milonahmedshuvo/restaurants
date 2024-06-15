import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Secret from "../ProviteRoutes/Secret";
import ProviteRoutes from "../ProviteRoutes/ProviteRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "../ProviteRoutes/AdminRoutes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: '/order/:category',
                element: <Order/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/secret",
                element: <ProviteRoutes> <Secret/> </ProviteRoutes>
            }
        ] 
    },

    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                // normar user route 
                path: "/dashboard/mycart",
                element: <Cart/>
            },
            // admin route 
            {
                 path: "/dashboard/additem",
                 element: <AdminRoutes> <AddItem/> </AdminRoutes>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoutes>  <Allusers/> </AdminRoutes>
            }
        ]
    }
])