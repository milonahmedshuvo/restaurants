import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';




const Login = () => {
      const refValue = useRef(null)
      const [disable, setDisable] = useState(true)


   useEffect(()=>{
    loadCaptchaEnginge(6);
   },[])

    const handleSubmitForm = (event) => {
          event.preventDefault()
          const form  = event.target 
          const email = form.email.value
          const password = form.password.value 
          
          console.log(email, password)
    }


    const handleCaptcha = () => {
      const user_captcha_value = refValue.current.value 
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
                ref={refValue}
                type="captcha"
                placeholder="captcha selcted"
                className="input input-bordered"
                
              />
              <button  onClick={handleCaptcha} className="btn btn-sm bg-gray-800 text-white mt-2">Validate</button>
              
            </div>




            <div className="form-control mt-6">
              
              <input disabled={disable} type="submit" value="Login"   className="btn btn-primary" />
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
