import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Auth_user from "../../../authentication/Auth_user";

const WishlistDetail = () => {
  const { http, user, token } = Auth_user();
  const [Wishlist, SetWishlist] = useState([]);
  const { product_id } = useParams();
  const getWishlist = () => {
    http
      .get(`/get-wishlist`)
      .then((res) => {
        console.log("Fetched Wishlist:", res.data.wishlist); // Log fetched wishlist here
        SetWishlist(res.data.wishlist);
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
      });
  };

  const removeWishlist = (wishe_id) => {
    http.get(`/remove-from-wishlist/${wishe_id}`)
      .then((res) => {
        const updatedWishlist = Wishlist.filter(item => item.wishe_id !== wishe_id);
        SetWishlist(updatedWishlist);
      })
      .catch((error) => {
        console.error('Error removing item from wishlist:', error);
      });
  };
  useEffect(() => {
    getWishlist();
  }, [product_id]);

  return (
    <>
      {/* Breadcrumb Section Begin */}
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
                <h2>Whishlist Cart</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Whishlist Cart</span>
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
                    {Wishlist.map((wish, index) => (
                      <tr key={wish.wishe_id}>
                        <td className="shoping__cart__item">
                          <img
                            src={
                              "https://vsmart.ajspire.com/uploads/product_image/" +
                              wish.product_image
                            }
                            alt={wish.product_name}
                            style={{ width: "100px" }}
                          />
                          <h5>{wish.english_name}</h5>
                        </td>
                        <td className="shoping__cart__price">
                          ${wish.wishe_price}
                        </td>
                        <td className="shoping__cart__quantity">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input
                                type="text"
                                value={wish.wishe_product_qty}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="shoping__cart__total">
                          ${wish.wishe_price * wish.wishe_product_qty}
                        </td>
                        <td className="shoping__cart__item__close">
                          <span className="icon_close" />
                          <button className="icon_close btn" onClick={()=>removeWishlist(wish.wishe_id)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading" />
                  Upadate wishlist
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                 
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                     
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Wish Total</h5>
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
          </div> */}
        </div>
      </section>
      {/* Shoping Cart Section End */}
    </>
  );
};

export default WishlistDetail;
