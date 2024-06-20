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
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import UpateManageItem from "../pages/Dashboard/UpateManageItem/UpateManageItem";
import Payment from "../pages/Dashboard/Payment/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";



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
                // normar user routes
             {
                path: "/dashboard/userHome",
                element: <UserHome></UserHome>
             },   
            { 
                path: "/dashboard/mycart",
                element: <Cart/>
            },
            {
                path: "/dashboard/payment",
                element: <Payment></Payment>
            },
            {
                path: "/dashboard/paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },


            // admin all routes 
            {
                path: '/dashboard/adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                 path: "/dashboard/additem",
                 element: <AdminRoutes> <AddItem/> </AdminRoutes>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoutes>  <Allusers/> </AdminRoutes>
            },
            {
                path: "/dashboard/mangeitem",
                element: <AdminRoutes> <ManageItem></ManageItem>  </AdminRoutes>
            },
            {
                path: "/dashboard/updateManageItem/:id",
                element: <UpateManageItem></UpateManageItem>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`) 
            }
            
        ]
    }
])