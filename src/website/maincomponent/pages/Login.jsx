import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [loginmData, setloginData] = useState({
    
    email: "",
   password: "",
   device_name:"Kumar"
  });

  console.log(loginmData);
  const onInputChange = (e) => {
    setloginData({ ...loginmData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://vsmart.ajspire.com/api/user/login", {
      method: "POST",
      body: JSON.stringify(loginmData), // Convert formData to JSON string
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
        // Include other headers if needed
      },
    })
      .then((res) => res.json())
      .then((data) => {
       
        console.log(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div>
        <section className="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Login</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-5">
        <div className="wrap">
          <div className="img" style={{backgroundImage: 'url(images/bg-1.jpg)'}} />
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign In</h3>
              </div>
              <div className="w-100">
                <p className="social-media d-flex justify-content-end">
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                </p>
              </div>
            </div>
            <form action="#" className="signin-form">
              <div className="form-group mt-3">
                <input type="text" className="form-control" name='email' onChange={(e) => onInputChange(e)} required />
                <label className="form-control-placeholder" htmlFor="username">Username</label>
              </div>
              <div className="form-group">
                <input id="password-field" type="password" name='password' onChange={(e) => onInputChange(e)} className="form-control" required />
                <label className="form-control-placeholder" htmlFor="password">Password</label>
                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={(e) => onSubmit(e)}>Sign In</button>
              </div>
              <div className="form-group d-md-flex">
                {/* <div className="w-50 text-left">
                  <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div> */}
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </form>
           <Link to='/register'> <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Register</a></p></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Login