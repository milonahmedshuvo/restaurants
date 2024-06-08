import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/Sheared/Navber";
import Footer from "../pages/Sheared/Footer";


const Main = () => {
    const location = useLocation()
    console.log(location)
    const login = location.pathname.includes("login")
    console.log("", login)

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