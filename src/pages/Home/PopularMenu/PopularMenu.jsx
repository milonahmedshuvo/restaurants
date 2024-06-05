import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Sheared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter((item) => item.category === 'popular')



    



    return (
        <section>
            <SectionTitle heading="from our menu" subheading="Check it out" ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 my-10">

                 {
                    popular?.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
                 }

            </div>
        </section>
    );
};

export default PopularMenu;