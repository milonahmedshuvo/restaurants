import { useContext, useEffect, useState, } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
      // const refValue = useRef(null)
      const [disable, setDisable] = useState(true)
      const {signinUser} = useContext(AuthContext)
      const navigate = useNavigate()
      const location = useLocation()

      const from  = location.state?.from?.pathname || "/"


   useEffect(()=>{
    loadCaptchaEnginge(6);
   },[])
   
   

    const handleSubmitForm = (event) => {
          event.preventDefault()
          const form  = event.target 
          const email = form.email.value
          const password = form.password.value 
          
          console.log(email, password)
          signinUser(email, password)
          .then((res) => {
            console.log(res.user)
            event.target.reset();
            Swal.fire("Login succesful");
            navigate(from, {replace: true})
          })
          .catch((err) => {
            console.log(err)
          })


    }


    const handleCaptcha = (e) => {
      const user_captcha_value = e.target.value 
      console.log(user_captcha_value)

      if(validateCaptcha(user_captcha_value)== true){
        setDisable(false)
      }


    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">


        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>


        <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">


          <form onSubmit={handleSubmitForm} className="card-body">
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

            <div className="form-control">
              <label className="label">
                {/* load chaptcha */}
                <LoadCanvasTemplate />
                
              </label>
              <input
                onBlur={handleCaptcha}
                type="captcha"
                placeholder="captcha selcted"
                className="input input-bordered"
                
              />
              {/* <button   className="btn btn-sm bg-gray-800 text-white mt-2">Validate</button> */}
              
            </div>




            <div className="form-control mt-6">
              
              <input disabled={false} type="submit" value="Login"   className="btn btn-primary" />
            </div>
          </form>

          <Link to='/signup' > 
          <p>New here?you are new register</p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Login;
