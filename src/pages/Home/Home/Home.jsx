import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Featured from "../../Featured/Featured";
import Bistroboss from "../Bistroboss/Bistroboss";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home </title>
            </Helmet>
           <Banner/>
           <Category/>
           <Bistroboss/>
           <PopularMenu/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;