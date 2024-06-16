import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleSingin = () => {
      const {googleSignin} = useAuth()
      const axiosPublic = useAxiosPublic()
      const navigate = useNavigate()





//  Google singin with email 
const handleGoogleSingIn = () => {
    // console.log("google singin")
    googleSignin()
    .then((res) => {
        // console.log("google singin ", res)
        // console.log(res.user.displayName)
        // console.log(res.user.email)
         const userinfo = {
            name: res.user.displayName,
            email: res.user.email
         } 
        
         axiosPublic.post("/users", userinfo)
         .then((res) => {
            console.log(res.data)
            
         })


         navigate('/')  
        Swal.fire("Google Singin succes");
    })
    .catch((err) => console.log(err))
  }



  return (
    <div className="px-4 ">
      <div className=" btn w-full bg-red-500 text-xl mt-2" onClick={handleGoogleSingIn}>
      
        <FaGoogle></FaGoogle> Google
      </div>
    </div>
  );
};

export default GoogleSingin;
