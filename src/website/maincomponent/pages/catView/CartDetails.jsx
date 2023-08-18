import React from "react";
import { Link, useParams } from "react-router-dom";
import Auth_user from "../../../authentication/Auth_user";
import { useState } from "react";
import { useEffect } from "react";

const CartDetails = () => {
  const { http, user } = Auth_user();
  const [Cart, SetCart] = useState([]);
  const { product_id } = useParams();

  const getCart = () => {
    http
      .get(`/add-to-cart/{product_id}`)
      .then((res) => {
        SetCart(res.data.products.data);
        console.log('hi');
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(()=>{
    getCart();
  },[product_id]);
  return (
    <>
      <div>
        {/* Breadcrumb Section Begin */}
        <section
          className="breadcrumb-section set-bg"
          style={{
            backgroundImage: "url('img/breadcrumb.jpg')",
            height: 400,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Shopping Cart</h2>
                  <div className="breadcrumb__option">
                    <Link to="/">Home</Link>
                    <span>Shopping Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Shoping Cart Section Begin */}
        <section className="shoping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
              {Cart.map((item) => (
                <tr key={item.product_id}> {/* Use a unique key */}
                  <td className="shoping__cart__item">
                    <img src={item.image_url} alt={item.product_name} />
                    <h5>{item.product_name}</h5>
                  </td>
                  <td className="shoping__cart__price">${item.price}</td>
                  <td className="shoping__cart__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="shoping__cart__total">${item.total}</td>
                  <td className="shoping__cart__item__close">
                    <span className="icon_close" />
                  </td>
                </tr>
              ))}
            </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="shoping__cart__btns">
                  <a href="#" className="primary-btn cart-btn">
                    CONTINUE SHOPPING
                  </a>
                  <a href="#" className="primary-btn cart-btn cart-btn-right">
                    <span className="icon_loading" />
                    Upadate Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__continue">
                  <div className="shoping__discount">
                    <h5>Discount Codes</h5>
                    <form action="#">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button type="submit" className="site-btn">
                        APPLY COUPON
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping__checkout">
                  <h5>Cart Total</h5>
                  <ul>
                    <li>
                      Subtotal <span>$454.98</span>
                    </li>
                    <li>
                      Total <span>$454.98</span>
                    </li>
                  </ul>
                  <a href="#" className="primary-btn">
                    PROCEED TO CHECKOUT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Shoping Cart Section End */}
      </div>
    </>
  );
};

export default CartDetails;
