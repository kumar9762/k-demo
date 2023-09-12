import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Auth_user from "../../../authentication/Auth_user";


export const Rough11 = () => {
  const notify = (M) => toast.error(M);
  const { http, token, user } = Auth_user();
  // const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [pvTotal, setPVTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [Order, setOder] = useState({
    product_id: [], // An array of product IDs
    product_qty: [], // An array of product quantities
    online_price: [], // An array of product prices
    discount: [], // An array of discounts
    pv_value: [], // An array of point values

    prototal: [], // An array of subtotals
    gst: [], // An array of GST values

    order_address: user.address, // Address for the order
    paymentmode: "", // Payment mode (adjust as needed)
    totalgst: "", // Total GST

    total: "", // Total order amount
    total_discount: "", // Total order discount
    totalpv: "", // Total point value
  });

  console.log("hello", Order);

  const getcartpproduct = () => {
    http.get(`/get-cart-list`).then((response) => {
      const cartdata = response.data.cart;
      console.log(cartdata);
      const productIds = [];
      const productQtys = [];
      const productPrices = [];
      const productDiscounts = [];
      const productPvValues = [];
      const productTotals = [];
      const productGsts = [];

      cartdata.forEach((item) => {
        productIds.push(item.product_id);
        productQtys.push(item.cart_product_qty);
        productPrices.push(item.online_price);
        productDiscounts.push(item.discount);
        productPvValues.push(item.point_value);
        productTotals.push(item.cart_price);
        productGsts.push(item.tax_per);
      });

      // Assuming the response contains the list of cart items

      setOder((prevOrder) => ({
        ...prevOrder,
        product_id: productIds, // An array of product IDs
        product_qty: productQtys, // An array of product quantities
        online_price: productPrices, // An array of product prices
        discount: productDiscounts, // An array of discounts
        pv_value: productPvValues, // An array of point values
        prototal: productTotals, // An array of subtotals
        gst: productGsts,
      }));

      setCartItems(cartdata);
    });
  };

  const Onsubmit = (e) => {
    e.preventDefault();
    http
      .post(`/order_now`, Order)
      .then((res) => {
        console.log("pl",res.data);
        setOder(res.data);
        alert("oredered");
        // setOder(res.data.order_now)
        // if (res.data.token) {
        //   setToken(res.data.user_data, res.data.token);

        //   navigate("/order");
        // } else {
        notify(res.data.message);
        // }
      })
      .catch((error) => {
        console.log(error);
        // notify(data.message); // Notify on error
      });
  };

  useEffect(() => {
    getcartpproduct();
  }, [token]);

  useEffect(() => {
    // Calculate the subtotal whenever the cart items change

    const newSubtotal = cartItems.reduce(
      (accumulator, item) =>
        accumulator + item.online_price * item.cart_product_qty,
      0
    );
    setSubTotal(newSubtotal);

    // Calculate the Gst whenever the cart items change
    // $gst = ($subto * $task->tax_per) / (100 + $task->tax_per);
    const gst = cartItems.reduce(
      (accumulator, item) =>
        accumulator +
        (item.online_price * item.cart_product_qty * item.tax_per) /
          (100 + item.tax_per),
      0
    );
    setTaxTotal(gst);
    // Calculate the P v whenever the cart items change

    const pv = cartItems.reduce(
      (accumulator, item) => accumulator + item.point_value,
      0
    );
    setPVTotal(pv);
    // Calculate the Discount whenever the cart items change

    const disc = cartItems.reduce((accumulator, item) => {
      console.log("Total Discount:", item.total_discount);
      const totalDiscount = parseFloat(item.total_discount);
      return accumulator + totalDiscount;
    }, 0);
    setDiscountTotal(disc);
    console.log(disc);

    setOder((prevOrder) => ({
      ...prevOrder,
      total: newSubtotal,
      totalgst: gst,
      total_discount: disc,
      totalpv: pv,
    }));
  }, [cartItems]);

  const OninputChange = (e) => {
    console.log(e);
    // Set({ ...Order, [e.target.name]: e.target.value });
    setOder((prevOrder) => ({
      ...prevOrder,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div class="all-title-box" style={{ marginTop: "200px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Checkout</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li class="breadcrumb-item active">Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-main table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>sr.no.</th>
                      <th>Images</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>brand</th>
                      <th>Quantity</th>
                      <th>Tax</th>
                      <th>pv</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={item.product_id}>
                        <td>{index + 1}</td>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img
                              src={`https://vsmart.ajspire.com/uploads/product_image/${item.product_image}`}
                              alt
                              style={{ height: "200px" }}
                            />
                          </a>
                        </td>
                        <td className="name-pr">
                          <h5>{item.english_name}</h5>
                        </td>
                        <td className="price-pr">
                          <p>{item.online_price}</p>
                        </td>
                        <td>{item.brand_name}</td>
                        <td className="quantity-box">
                          <input
                            type="number"
                            size={4}
                            value={item.cart_product_qty}
                            min={0}
                            step={1}
                            className="c-input-text qty text"
                          />
                        </td>
                        <td className="total-pr">
                          <p>{item.tax_per}</p>
                        </td>

                        <td>
                          <p>{item.products_basic_pv}</p>
                        </td>
                        <td className="remove-pr">
                          <p>{item.online_price * item.cart_product_qty}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-sm-6">
              <div className="coupon-box">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control"
                    placeholder="Enter your coupon code"
                    aria-label="Coupon code"
                    type="text"
                  />
                  <div className="input-group-append"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="update-box"></div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-8 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="order-box">
                <h3>Order summary</h3>
                <div className="d-flex">
                  <h4>Sub Total</h4>
                  <div className="ml-auto font-weight-bold">{subTotal}</div>
                </div>
                <div className="d-flex">
                  <h4>pvTotal</h4>
                  <div className="ml-auto font-weight-bold">{pvTotal}</div>
                </div>
                <hr className="my-1" />
                <div className="d-flex">
                  <h4>taxTotal</h4>
                  <div className="ml-auto font-weight-bold">{taxTotal}</div>
                </div>
                <div className="d-flex">
                  <h4>discountTotal</h4>
                  <div className="ml-auto font-weight-bold">
                    {discountTotal}
                  </div>
                </div>
                <div className="d-flex">
                  <h4>Shipping Cost</h4>
                  <div className="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr />
                <div className="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div className="ml-auto h5"> {subTotal}</div>
                </div>
                <hr />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" new-account-login">
        <div className="">
          <div className="title-left">
            <h3>dilevery address</h3>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-name">Address</label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                name="address"
                readOnly
                placeholder="Enter your address"
                value={user.address}
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback"> Name on card is required </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cc-number">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                name="mob_no"
                placeholder
                required
              />
              <div className="invalid-feedback">
                {" "}
                Credit card number is required{" "}
              </div>
            </div>
          </div>
          <div class="title">
            {" "}
            <span>Payment</span>{" "}
          </div>
          <div class="d-block my-3">
            <div>
              <div class="form-control" className="custom-radio">
                <input
                  type="checkbox"
                  name="paymentmode"
                  onClick={(e) => OninputChange(e)}
                  className="form-control"
                  value={"cash on delivery"}
                />
                <label className="custom-control-label" htmlFor="credit">
                  cash on delivery
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  class="form-control"
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  class="form-control"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  Paypal
                </label>
                <br></br>
                <br></br>

                <button type="submit" onClick={(e) => Onsubmit(e)}>
                  order place
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
