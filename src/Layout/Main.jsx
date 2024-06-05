import { Outlet } from "react-router-dom";
import Navber from "../pages/Sheared/Navber";
import Footer from "../pages/Sheared/Footer";


const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;