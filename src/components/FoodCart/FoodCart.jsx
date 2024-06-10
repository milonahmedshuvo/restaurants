import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import  axios  from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useAuth()
  const useaxios = useAxiosSecure()
  const navigate = useNavigate(); 
  const location = useLocation()




  const selectedFoodItem = (food) => {
    
    if(user && user.email) {
      // post food item data in database 
      console.log(food)
      const cartItem = {
           manuId : _id,
           email: user.email,
           name, 
           price, 
           image
      }
      useaxios.post("/carts", cartItem )
      .then((response) => {
        console.log(response)
        Swal.fire(`${name} add to cart `);
      })



    }else{
      Swal.fire({
        title: "You are not login this site!",
        text: "food cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate login page 
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }





  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
       
       <p className="bg-slate-900 px-4 absolute right-0 mr-4 mt-4 text-white">{price}</p>


      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={ () => selectedFoodItem ( item ) } className="btn btn-outline bg-slate-300 border-0 border-b-4 border-b-orange-400 mt-2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
