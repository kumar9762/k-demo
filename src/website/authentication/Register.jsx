import React, { useState } from "react";

const Register = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    mob_no: "",
    address: "",
    password: "",
    cpassword: "",
  });

  console.log(formData);
  const onInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("https://vsmart.ajspire.com/api/userregister", {
      method: "POST",
      body: JSON.stringify(formData), // Convert formData to JSON string
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
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Register</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      name="name"
                      id="username"
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Mobile</label>
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      name="mob_no"
                      id="email"
                      placeholder="Enter mobile"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      name="address"
                      id="email"
                      placeholder="Enter address"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">CPassword</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => onInputChange(e)}
                      id="password"
                      name="cpassword"
                      placeholder="CPassword"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={(e) => onSubmit(e)}
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-center mt-3">
                  Already have an account? <a href="/login">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
