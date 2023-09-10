import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Auth_user from "../../../authentication/Auth_user";

const Checkout = () => {
  const { http, user, token } = Auth_user();
  const [Cart, SetCart] = useState([]);
  const { product_id } = useParams();
  const [productIds, setProductIds] = useState([]);
  const [productQty, setProductQty] = useState([]);
  const [productPrice, setProductPrice] = useState([]);
  const [productDiscount, setProductDiscount] = useState([]);
  const [productTotal, setProductTotal] = useState([]);
  const [productPV, setProductPV] = useState([]);
  const [productGST, setProductGST] = useState([]);


  const [Order, setOrder] = useState({
    product_id: [],
    product_qty: [],
    online_price: [],
    discount: [],
    pv_value: [],
    prototal: [],
    gst: [],
    total: "",

    totalgst: "",
    total_discount: "",
    totalpv: "",
    order_address: user.address,
    paymentmode: "",
  });

  //console.log(Order);

  let total = 0; // Initialize the total
  let ptotal = 0;
  let gtotal = 0;
  let dtotal = 0;
  const newProductIds = [];
  const newProductQty = [];
  const newProductPrice = [];
  const newProductDiscount = [];
  const newProductTotal = [];
  const newProductPV = [];
  const newProductGST = [];


  // Calculate total by summing up cart_price for all items
  Cart.forEach((cart) => {
    total = total + cart.cart_amount;
    ptotal = ptotal + cart.point_value;
    gtotal =
      gtotal +
      parseInt(
        (cart.online_price * cart.cart_product_qty * cart.tax_per) /
          (100 + cart.tax_per)
      );
    dtotal = dtotal + parseFloat(cart.total_discount);
  });

  const getCart = () => {
    http
      .get(`/get-cart-list`)
      .then((res) => {
        console.log("cartitem", res.data.cart);
        SetCart(res.data.cart);

        res.data.cart.forEach((cartItem) => {
          newProductIds.push(cartItem.product_id);
          newProductQty.push(cartItem.cart_product_qty);
          newProductPrice.push(cartItem.online_price);
          newProductDiscount.push(cartItem.discount);
          newProductTotal.push(cartItem.cart_price);
          newProductPV.push(cartItem.point_value);
          newProductGST.push(cartItem.gst);

        });

        setProductIds(newProductIds);
        setProductQty(newProductQty);
        setProductPrice(newProductPrice);
        setProductDiscount(newProductDiscount);
        setProductTotal(newProductTotal);
        setProductPV(newProductPV);
        setProductGST(newProductGST);

      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  useEffect(() => {
    getCart();
  }, [token]);

  useEffect(() => {
    console.log(Order);
  }, []);

  const onInputChange = (e) => {
    console.log(e);

    setOrder((prevOrder) => ({
      ...prevOrder,
      [e.target.name]: [e.target.value],
    }));
  };
  const PlaceOrder = () => {
    const orderItems = {
      product_id: productIds,
      product_qty: productQty,
      online_price: productPrice,
      discount: productDiscount,
      pv_value: productPV,
      prototal: productTotal,
      gst:productGST ,
      total: total,
      total_discount: dtotal,
      totalpv: ptotal,
       totalgst: gtotal,
      order_address: user.address,
      paymentmode: Order.paymentmode,
    };
console.log(productIds);
    const data = {
      items: orderItems,
    };

    console.log("OrderPlaced", data.items);
    // Send the order data to the API using axios
    // http
    //   .post(`/order_now`, data)
    //   .then((res) => {
    //     console.log(res);
    //     // Optionally, you can perform some action after a successful response
    //     // For example, you can redirect the user to a confirmation page.
    //   })
    //   .catch((error) => {
    //     console.error("Error placing order:", error);
    //     // Handle errors here, such as showing an error message to the user.
    //   });
  };

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
                  <table className="table-secondary">
                    <thead style={{ backgroundColor: "green" }}>
                      <tr>
                        <th>Sr.No</th>
                        <th className="shoping__product">Products</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>PV</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Cart.map((cart, index) => (
                        <tr key={cart.product_id}>
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
                          <td style={{ width: "150px" }}>
                            {cart.english_name}
                          </td>
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
                          <td>{cart.point_value}</td>
                          <td className="shoping__cart__total">
                            ${cart.cart_price * cart.cart_product_qty}
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
                      GST Total <span>${gtotal}</span>
                    </li>
                    <li>
                      Discount Total <span>${dtotal}</span>
                    </li>
                    <li className="text-success">
                      Total<small>(incl.TAX)</small> <span>${total}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="card p-1 ms-2" style={{ height: "220px" }}>
            <div className=" justify-content-between">
              <h3> Payment Option</h3>
              {/* <button className="btn btn-outline-success me-0">
                Edit Number
              </button> */}
              <hr />
              <div className="row">
                <div className="col-3">
                  <div
                    className="card p-3"
                    style={{
                      height: "100px",
                      borderColor: "pink",
                      backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}
                  >
                    <label>
                      <input
                        type="radio"
                        name="paymentmode"
                        value="Cash On Delivery"
                        onClick={(e) => onInputChange(e)}
                      />
                      Cash on Delivery
                    </label>
                    <i className="fa fa-inr" />
                    {total}
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="card p-3"
                    style={{
                      height: "100px",
                      borderColor: "pink",
                      backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}
                  >
                    <label>
                      <input
                        type="radio"
                        name="paymentmode"
                        value="Online Transfer"
                        onClick={(e) => onInputChange(e)}
                      />
                      Online Transfer
                    </label>
                    <i className="fa fa-inr" />
                    {total}
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card p-3"
                    style={{
                      height: "100px",
                      borderColor: "pink",
                      backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}
                  >
                    <label>
                      <input type="radio" name="paymentmod"  value="wallet"
                        onClick={(e) => onInputChange(e)}/>
                      Use wallet balance current month
                    </label>
                    <i className="fa fa-inr" />
                  </div>
                </div>

                <div className="col-3">
                  <div
                    className="card p-3"
                    style={{
                      height: "100px",
                      borderColor: "pink",
                      backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}
                  >
                    <label>
                      <input type="radio" name="paymentmod"  />
                      Repurchase amount
                    </label>
                    <i className="fa fa-inr" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="checkbox" /> By making this purchase you agree to our
          Terms and Conditions
        </div>
        <button className="btn btn-outline-success w-100 " onClick={PlaceOrder}>
          <Link to="#" style={{ textDecoration: "none" }}>
            ORDER NOW
          </Link>
        </button>
        {/* Shoping Cart Section End */}
      </div>
    </>
  );
};

export default Checkout;
