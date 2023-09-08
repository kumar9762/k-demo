import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth_user from "./Auth_user";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const notify = (M) => toast.error(M);

  const { http, setToken, token } = Auth_user();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(0);
  //console.log('hi',token);
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [navigate, token]);

  const [loginData, setloginData] = useState({
    email: "",
    password: "",
    //device_name:"Kumar"
  });

  console.log("hello", loginData);

  const onInputChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value }); //set values
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("https://vsmart.ajspire.com/api/user/login", {
  //     method: "POST",
  //     body: JSON.stringify(loginData), // Convert formData to JSON string
  //     headers: {
  //       "Content-Type": "application/json", // Specify content type as JSON
  //       // Include other headers if needed
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {

  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    http.post(`/user/login`, loginData).then((res) => {
       console.log('ok',res.data.user_data);

      if (res.data.token) {
        setToken(res.data.user_data, res.data.token);
        // setUser();
        navigate("/");
      } else {
        notify(res.data.message);
      }
      setDisable();
    });
  };
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login Form </h2>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-7 col-lg-5">
              <div className="wrap border"  style={{
                              transform: "skewX(-3deg)",
                              border: "1px solid green",
                              width: "100%",
                              borderRadius: "20px",
                              boxShadow: "10px 0px 190px rgba(125, 10, 180, 0.5)",
                            }}>
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/bg-1.jpg)" }}
                />
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook" />
                        </a>
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" className="signin-form" >
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="username"
                      >
                        Username
                      </label>
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        name="password"
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                        onClick={(e) => onSubmit(e)}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group ">
                      <div className="w-100  ">
                        <a href="#" className="">Forgot Password</a>
                        <Link to="/register">
                          <p className="text-center" style={{marginLeft:"100px",marginTop:"-20px"}}>
                            Not a member?
                            <a data-toggle="tab" href="#signup">
                             Register
                             </a>
                           </p>
                         </Link>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
