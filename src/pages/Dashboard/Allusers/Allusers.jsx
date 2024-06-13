import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";




const Allusers = () => {
      const axiosSecure = useAxiosSecure()




    const {data: users=[], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data 
        }
    })



    const handleMakeAdmin = (user) => {
          console.log(user)
          axiosSecure.patch(`/user/admin/${user._id}`)
          .then((res) => {
            console.log(res)
           
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is admin suceess`,
              showConfirmButton: false,
              timer: 1500
            });

            refetch()
          })
    }



    const handleUsersDelete = (id) => {
          console.log(id)

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
              
             axiosSecure.delete(`/users/${id}`)
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
          <p>All users</p> 
           <p>Total users {users.length}</p>
          </div>

           


           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        users.map((user) => <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
       { user.role ? "admin":  <button type="button" onClick={ ()=> handleMakeAdmin(user) } className="btn text-2xl text-white bg-orange-500 " > <FaUsers></FaUsers> </button> }
        </td>
        <td>
            <button type="button" onClick={()=> handleUsersDelete(user._id)} className="btn text-2xl text-red-600 " > <FaTrashAlt></FaTrashAlt> </button>
        </td>
      </tr>)
      }
     
      
      
    </tbody>
  </table>
</div>



        </div>
    );
};

export default Allusers;