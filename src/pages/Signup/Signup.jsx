import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';

const Signup = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext)

    const handleSignupForm =(event) => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value
        const photourl = form.photourl.value

        console.log(name, email, password, photourl)
        createUser(email, password)
        .then((res) => {
          const user = res.user
          console.log("user", user)
          
          
          userUpdateProfile(name, photourl)
          .then(() => {
            console.log("profile update")
            Swal.fire("update succesful");
          })
          .catch((err) => console.log(err))


          event.target.reset();
        })
        .catch((err) => {
          console.log(err)
        })
    }




    return (
         <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">


        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Sing Up!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>


        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">


          <form onSubmit={handleSignupForm} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="Your photourl"
                className="input input-bordered"
                
              />
            </div>





            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                
              />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
               
              />
              
            </div>

            




            <div className="form-control mt-6">
              
              <input type="submit" value="Signup" className="btn btn-primary" />
            </div>
          </form>

        <Link to="/login" > <p>if you have account, plase go</p> </Link>
        </div>
      </div>
    </div>
    );
};

export default Signup;