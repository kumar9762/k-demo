import React from "react";
import { Link, useParams } from "react-router-dom";
import Auth_user from "../../../authentication/Auth_user";
import { useState } from "react";
import { useEffect } from "react";

const CartDetails = () => {
  const { http, user } = Auth_user();
  const [Cart, SetCart] = useState([]);
  const { product_id } = useParams();

  let total = 0; // Initialize the total
let ptotal=0;
let ttotal=0;
let dtotal=0;
  // Calculate total by summing up cart_price for all items
  Cart.forEach((cart) => {
    total = total + cart.cart_amount;
    console.log("Total", total);
    ptotal=ptotal+cart.point_value;
    ttotal=ttotal+cart.point_value;
    dtotal=dtotal+parseFloat(cart.total_discount);
    
  });
  console.log("Total Discount", dtotal);

  const getCart = () => {
    http
      .get(`/get-cart-list`)
      .then((res) => {
        SetCart(res.data.cart);
        console.log("hi", res.data.cart);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const removeCart = (cart_id) => {
    http.get(`/remove-to-cart/${cart_id}`).then((res) => {
      console.log(res);
      const updatedCart = Cart.filter((item) => item.cart_id !== cart_id);
      SetCart(updatedCart);
      console.log(res.data.msg,updatedCart); // This should work if 'res' contains 'updatedCart'
      alert(res.data.msg);
    });
  
  };


  useEffect(() => {
    getCart();
  }, [product_id]);

  

  
  return (
    <>
      <div>
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
                  <h2>My Cart</h2>
                  <div className="breadcrumb__option">
                    <Link to="/">Home</Link>
                    <span>My Cart</span>
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
                  <table className="table-secondary  " >
                    <thead  style={{backgroundColor:"green"}}>
                      <tr >
                        <th >Sr.No</th>
                        <th className="shoping__product">Products</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        {/* <th>Tax</th> */}
                        <th>PV</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Cart.map((cart, index) => (
                        <tr key={cart.product_id}>
                        <td>{index+1}</td>
                          <td className="shoping__cart__item" style={{width:"100px"}}>
                            <img
                              src={
                                "https://vsmart.ajspire.com/uploads/product_image/" +
                                cart.product_image
                              }
                              alt={cart.product_name}
                              style={{ width: "100px" }}
                            />
                            
                          </td>
                          <td  style={{width:"150px"}}>{cart.english_name}</td>
                          <td className="shoping__cart__price">
                            ${cart.cart_price}
                          </td>
                          <td>{cart.brand_name}</td>
                          <td className="shoping__cart__quantity">
                            <div className="quantity">
                              <div className="pro-qty">
                                <input
                                  type="text"
                                  value={cart.cart_product_qty}
                                />
                              </div>
                            </div>
                          </td>
                          {/* <td>{cart.tax_}</td> */}
                          <td>{cart.point_value}</td>
                          <td className="shoping__cart__total">
                            ${cart.cart_price * cart.cart_product_qty}
                          </td>
                          <td className="shoping__cart__item__close">
                            <button className="btn btn-danger" onClick={()=>removeCart(cart.cart_id)}>Remove</button>
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
                  <Link to="/all_prodshow" className="primary-btn cart-btn">
                    CONTINUE SHOPPING
                  </Link>
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
                      Subtotal <span>${total}</span>
                    </li>
                    <li>
                      PV Total <span>${ptotal}</span>
                    </li>
                    <li>
                      Tax Total <span>${ttotal}</span>
                    </li>
                    <li>
                      Discount Total <span>${dtotal}</span>
                    </li>
                    <li>
                      Total <span>${total}</span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="btn btn-success ">
                    PROCEED TO CHECKOUT <span style={{ marginLeft: '340px' }}>{total}</span>
                  </Link>
               
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
