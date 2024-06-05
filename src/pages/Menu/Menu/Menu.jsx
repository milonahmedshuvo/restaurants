import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';



const Menu = () => {
      const [menu] = useMenu()
      const offered = menu.filter((item)=> item.category === "offered")
      const dessert = menu.filter((item) => item.category === "dessert")
      const pizza = menu.filter((item) => item.category ==="pizza")
      const salad = menu.filter((item) => item.category === "salad")
      const soup = menu.filter((item) => item.category === 'soup')


      

    return (
        <div>
            <Helmet>
            <title>Bistro boss | menu </title>
            </Helmet>

           <Cover  img={coverImg} title={"our menu it"}></Cover>
           <SectionTitle subheading="----Dont miss----" heading="todays offer" ></SectionTitle>
           <MenuCategory items={offered} ></MenuCategory>
           {/* dessert */}
           <MenuCategory items={dessert} title="dessert" coverImg={dessertImg} ></MenuCategory>
           {/* pizza */}
           <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} ></MenuCategory>
           {/* salad */}
           <MenuCategory items={salad} title="salad" coverImg={saladImg} ></MenuCategory>
           {/* soup */}
           <MenuCategory items={soup} title="soup" coverImg={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;