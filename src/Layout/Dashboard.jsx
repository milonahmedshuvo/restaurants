import { FaAd, FaHome, FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { FaTowerObservation } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";




const Dashboard = () => {
  


  const isAdmin = true


  return (
    <div className="flex">
      {/* side bar show  */}
      <div className=" bg-orange-400 w-64 min-h-screen">
        <ul className="menu">

          { isAdmin && <> 
                    
            <li>
            <NavLink to="/">
              <FaHome></FaHome>
                Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaTowerObservation></FaTowerObservation>
                Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart>
                Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
               <FaAd></FaAd>
                 Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allusers">
                 <FaUserAlt></FaUserAlt>
                  All Users
            </NavLink>
          </li>
          
          </>  }
          




          {/* this is sheared manu here */}
          <hr />



          <li className="mt-4">
            <NavLink to="/">
                  <FaHome></FaHome>
                  Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
                 <FaSearch></FaSearch>
                 Menu
            </NavLink>
          </li>
        </ul>
      </div>

      {/* side bar content in all nested routes  */}
      <div className=" md:ml-10 flex-1">
           <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;