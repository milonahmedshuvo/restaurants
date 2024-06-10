import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/Sheared/Navber";
import Footer from "../pages/Sheared/Footer";


const Main = () => {
    const location = useLocation()
   
    const login = location.pathname.includes("login") || location.pathname.includes("signup")
    

    return (
        <div>
            {/* login na thakle tahole navber dikaba/ || or ta not bujay && and true bujay  */}
           { login ||  <Navber/> }
            <Outlet/>
            {login || <Footer/>}
        </div>
    );
};

export default Main;