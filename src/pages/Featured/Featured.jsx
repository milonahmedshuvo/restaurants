import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImage from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured_image pt-10 pb-14 bg-fixed ">
             <SectionTitle subheading={"Check it out"} heading={'from our menu'} ></SectionTitle>

             <div className=" md:flex justify-center items-center py-10 px-24 text-white ">

                <div>
                    <img src={featuredImage} alt="" />
                </div>

                <div className="md:ml-5">
                   <h3>March 20, 2024</h3>
                   <h3 className="uppercase">Wheare can i get some?</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laudantium officia numquam ipsa perferendis est saepe, rerum dolorem natus sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam fugiat ipsum quaerat, nam voluptas expedita repudiandae deserunt vitae similique necessitatibus non dolor enim alias itaque consequuntur reiciendis dolores facere!</p>

                   <button className="btn btn-outline border-0 border-b-4 mt-3 text-white">Order now</button>
                </div>


             </div>
        </div>
    );
};

export default Featured;