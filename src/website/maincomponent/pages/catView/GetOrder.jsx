import React, { useEffect } from "react";
import Auth_user from "../../../authentication/Auth_user";
import { useState } from "react";
import { Link } from "react-router-dom";

const GetOrder = () => {
  const { http, user, token } = Auth_user();
  const [MyOrder, SetMyOrder] = useState([]);
  const [MyorderProduct, SetMyorderProduct] = useState([]);

  const getProduct = () => {
    console.log("clicked");
    http.get(`/get_all_orders`).then((res) => {
      console.log("get", res.data);
      SetMyorderProduct(res.data.myOrderproduct);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <section
        className="breadcrumb-section set-bg "
        style={{
          backgroundImage: "url('img/breadcrumb.jpg')",
          height: 400,
          marginTop: "250px",
        }}
      >
        {/* Breadcrumb section content */}
      </section>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table className="table-secondary">
                  <thead style={{ backgroundColor: "green" }}>
                    <tr>
                      <th>Sr.No</th>
                      <th className="shoping__product">Products</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Brand</th>
                      <th>Quantity</th>
                      <th>Order Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MyorderProduct.map((cart, index) => (
                      <tr key={`${cart.product_id}-${index}`}>
                        <td>{index + 1}</td>
                        <td
                          className="shoping__cart__item"
                          style={{ width: "100px" }}
                        >
                          <img
                            src={
                              "https://vsmart.ajspire.com/uploads/product_image/" +
                              cart.product_image
                            }
                            alt={cart.product_name}
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td style={{ width: "200px" }}>{cart.english_name}</td>
                        <td className="shoping__cart__price">
                          ${cart.online_price}
                        </td>
                        <td>{cart.brand_name}</td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input
                                type="text"
                                value={cart.sales_product_qty}
                                readOnly // Input is read-only
                              />
                              <i className="fa fa-return"></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          {" "}
                          <i className="fa fa-arrow-left"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              style={{ marginLeft: "250px", marginTop: "-50px" }}
            >
              {/* Checkout or summary section */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetOrder;
