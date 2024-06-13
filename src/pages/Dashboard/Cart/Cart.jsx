import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const Cart = () => {
  const [carts,  refetch ] = useCart();
  const axiosSecure = useAxiosSecure()
  const totalPrice = carts.reduce((priviosValue, currentValue) => {
    return priviosValue + currentValue.price;
  }, 0);


  const handleItemDelete = (id) => {
   

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
       axiosSecure.delete(`/carts/${id}`)
       .then((res) => {
        console.log(res)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        refetch()
       })

      }
    });
  }

  return (
    <div>
      <div className="flex justify-evenly">
        <h1>item: {carts.length} </h1>
        <h1>total price: {totalPrice} </h1>
        <div className="btn btn-sm btn-primary">pay</div>
      </div>

      {/* table show here  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

             {
                carts.map((item, index) =><tr key={item._id}>
              <th>
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                  <p>{index + 1}</p>
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>



              <td>
                {item.name}
              </td>
                {item.price}
              <th className="text-red-600 text-2xl" onClick={() => handleItemDelete(item._id)}>
                <FaTrashAlt></FaTrashAlt>
              </th>
            </tr>

                )
             }

           



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
