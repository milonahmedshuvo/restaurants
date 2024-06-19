import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ManageItem = () => {
  const [menu,  , refetch] = useMenu();
  const axiosSecure = useAxiosSecure()


  const handleItemDelete = async (id) =>{
         console.log(id)

         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data)
                if(res.data.deletedCount > 0 ){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                }
              
            }
          });
  }






  return (
    <div>
      <SectionTitle
        heading="manage all item"
        subheading={`total item ${menu.length}`}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                menu.map((item, index) => <tr key={item._id}>
                <th>{index + 1}</th>
                <td> <img className="w-16 h-16 rounded-full" src={item.image} alt="" /> </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/dashboard/updateManageItem/${item._id}`}>
                <button type="button"  className="btn text-2xl text-white bg-orange-500 " > <FaUpload></FaUpload> </button>
                </Link>
                </td>
                <td>
                <button type="button" onClick={()=> handleItemDelete(item._id)} className="btn text-2xl text-red-600 " > <FaTrashAlt></FaTrashAlt> </button>
                </td>

              </tr>)
              }
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
