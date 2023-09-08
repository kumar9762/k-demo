import React, { useEffect, useState } from "react";
import Auth_user from "../../../authentication/Auth_user";
import { Link } from "react-router-dom";
import img from "../../images/download (1).png";
import Header from "../../Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserView = () => {
  const { http, token } = Auth_user();
  const [User, SetUser] = useState([]);

  const getUser = () => {
    http.get(`/user/profile`).then((res) => {
      SetUser(res.data.user);
      console.log("user", res.data.user);
    });
  };

  //   const OnInputs = ((e) => {
  //     SetUser({ ...User, [e.target.name]: e.target.value, })
  //   })

  // const handleEditProfile = () => {

  //   console.log("clicked");
  //   toast.success("Profile edited successfully!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //   });
  // };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
    <Header/>
      <div style={{ backgroundColor: "#fff" }}>
        <section
          className="breadcrumb-section set-bg "
          style={{
            backgroundImage: "url('img/breadcrumb.jpg')",
            height: 400,
            marginTop: "250px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>User Profile</h2>
                  <div className="breadcrumb__option">
                  <h2>UserId:{User.id}</h2>
                    {/* <Link to="/">Home</Link>
                    <span>My Cart</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="card p-3"
                style={{
                  height: "150px",
                  borderColor: "green",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
              >
                <h5>Total point value</h5>
                0.00
              </div>
            </div>
            <div className="col">
              <div
                className="card p-3"
                style={{
                  height: "150px",
                  borderColor: "green",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
              >
                <h5>Total reward value</h5>
                0.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light">
        <div className="container">
          <div className="card p-5" style={{ height: "300px" }}>
            <div className=" justify-content-between">
              <h3> Your Profile</h3>
              <button className="btn btn-outline-success me-0" >
               <Link to='/userupdate'>Edit Profile</Link> 
              </button>
              <hr />
              <ToastContainer />
            </div>

            <form class="row g-3 justify-content-between">
              <div className="col-auto">
                <div className="">
                  <img
                    src={img}
                    alt="userImg"
                    style={{
                      border: "2px solid red",
                      borderRadius: "50%",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </div>
              </div>
              <div class="col-auto">
                <label
                  for="name"
                  className="text-info"
                  style={{ fontWeight: "bold" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  placeholder=""
                  value={User.name}
                  style={{ width: "300px" }}
                  readOnly
                />
              </div>
              <div className="col-auto">
                <label
                  for="email"
                  className="text-info"
                  style={{ fontWeight: "bold" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=""
                  value={User.email}
                  style={{ width: "300px" }}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  className="btn btn-primary "
                  style={{ marginTop: "40px" }}
                >
                  Change Pass
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="card p-5" style={{ height: "300px" }}>
            <div className=" justify-content-between">
              <h3> Contact Number</h3>
              {/* <button className="btn btn-outline-success me-0">
                Edit Number
              </button> */}
              <hr />
              <div className="col-4">
              <div
                className="card p-3"
                style={{
                  height: "100px",
                  borderColor: "green",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
              >
                <h5>{User.mob_no}</h5>
                
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="card p-5" style={{ height: "300px" }}>
            <div className=" justify-content-between">
              <h3> Delivery Address</h3>
              {/* <button className="btn btn-outline-success me-0">
                Edit Address
              </button> */}
              <hr />
              <div className="col-4">
              <div
                className="card p-3"
                style={{
                  height: "100px",
                  borderColor: "green",
                  backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
              >
                <h5>{User.address}</h5>
                
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default UserView;
