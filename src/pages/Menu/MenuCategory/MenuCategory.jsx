import { Link } from "react-router-dom";
import MenuItem from "../../Sheared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, coverImg, title }) => {


  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-6 my-10 mt-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={`/order/${title}`}>
      <button className="btn btn-outline bg-slate-950  mt-3 text-white">Order now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
