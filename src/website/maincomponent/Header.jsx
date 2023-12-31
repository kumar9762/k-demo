import React, { useEffect, useState } from "react";
import { FaHome, FaShoppingCart, FaBlog, FaEnvelope } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";
import "./Header.css";
import "./Cart.css";
import Auth_user from "../authentication/Auth_user";

const Header = () => {
  const { http, user, logout, token } = Auth_user();
  const [Cart, setCart] = useState([]);

  // console.log(user);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleHamburgerClick = () => {
    setShowHamburgerMenu(true);
  };

  const handleHamburgerOverlayClick = () => {
    setShowHamburgerMenu(false);
  };
  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  const [showMegaBrand, setShowMegaBrand] = useState(false);

  const handleBrandMouseEnter = () => {
    setShowMegaBrand(true);
  };

  const handleBrandMouseLeave = () => {
    setShowMegaBrand(false);
  };

  const [showMegaCart, setShowMegaCart] = useState(false);

  const handleCartMouseEnter = () => {
    setShowMegaCart(true);
  };

  const handleCartMouseLeave = () => {
    setShowMegaCart(false);
  };

  const [showMegaWish, setShowMegaWish] = useState(false);

  const handleWishMouseEnter = () => {
    setShowMegaWish(true);
  };

  const handleWishMouseLeave = () => {
    setShowMegaWish(false);
  };

  const [cartLength, SetcartLength] = useState(0);
  const [Total, SetTotal] = useState(0);
  const GetCartProduct = () => {
    if (!token) {
      
        //console.log(res.data);
        setCart([]);
        SetcartLength(0);
        SetTotal(0);
      
     
    } else {
      http.get(`/get-cart-list`).then((res) => {
        //console.log(res.data);
        setCart(res.data.cart);
        SetcartLength(res.data.cart.length);
        SetTotal(res.data.total_amount);
      });
    }
  };

  //const [Wish,SetWish]=useState([]);
  //const [wishLength, SetwishLength] = useState(0);
  const [WTotal, SetWTotal] = useState(0);
  
  
  const GetWishProduct = () => {
    if (!token) {
      // If there is no token, set WTotal to 0
      SetWTotal(0);
    } else {
      // If there is a token, make the HTTP request
      http.get(`/get-wishlist`).then((res) => {
        console.log('Wishlist', res.data.total_products);
        SetWTotal(res.data.total_products);
      });
    }
  };
  


  const getCategory = () => {
    http
      .get(`/categories`)
      .then((res) => {
        setCategory(res.data.categories);
        res.data.categories.forEach((categories) => {
          getSubcategories(categories.category_id);
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const getSubcategories = (category_id) => {
    http
      .get(`/subcategories/${category_id}`)
      .then((res) => {
        const newsubcategory = res.data.subcategories;
        setSubCategory((previssubcat) => {
          const filtersubcategory = newsubcategory.filter(
            (newsubcategory) =>
              !previssubcat.some(
                (previs) =>
                  previs.subcategory_id === newsubcategory.subcategory_id
              )
          );

          return [...previssubcat, ...filtersubcategory];
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [Brand, SetBrand] = useState([]);

  const getBrand = () => {
    http
      .get(`/brands`)
      .then((res) => {
        SetBrand(res.data.brands);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

const[search,Setsearch]=useState('');
const[searchParam,Setsearchparam]=useSearchParams();
  const onInputChange = (e) => {
    Setsearch(e.target.value ); //set values

  };
  // console.log(search);


  useEffect(() => {
    getCategory();
    getBrand();
    GetCartProduct();
    GetWishProduct();
  }, []);

  return (
    <>
      <div className="fixed-top mb-5 headbackground " style={{height:"237px"}}>
        {/* Humberger Begin */}
        <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <Link to="#">
              <img src="img/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <Link to="#">
                  <i className="fa fa-heart" /> <span>{WTotal}</span>
                </Link>
              </li>
              <li>
              <li>
                      <Link to="#">
                        <li className="navbar-item dropdown-megamenu">
                          <Dropdown
                            show={showMegaCart}
                            onClick={handleCartMouseEnter}
                            onMouseLeave={handleCartMouseLeave}
                          >
                            <i className="fa fa-shopping-bag" />
                            <li></li>
                            <span>{cartLength}</span>
                            <Dropdown.Menu
                              className="mega-menu"
                              style={{
                                height: "auto",
                                width: "auto",
                                marginLeft: "-350px",
                                paddingLeft: "30px",
                              }}
                            >
                              <div className="row">
                                <div className="">
                                  <table className="table table-image">
                                    <thead>
                                      <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scope="col">Image</th>
                                        <th scope="col"> Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Cart.slice(0, 3).map((cart, index) => (
                                        <tr key={cart.cart_id}>
                                          <th scope="row">{index++}</th>
                                          <td className="w-25">
                                            <img
                                              src={
                                                "https://vsmart.ajspire.com/uploads/product_image/" +
                                                cart.product_image
                                              }
                                              className="img-fluid img-thumbnail"
                                              alt="Sheep"
                                            />
                                          </td>
                                          <td>{cart.english_name}</td>
                                          <td>Rs.{cart.cart_price}</td>
                                          <td>{cart.cart_product_qty}</td>
                                          <td>
                                            {cart.cart_price *
                                              cart.cart_product_qty}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <Link to="/cartdetails">
                                    
                                    <button className="btn btn-info">
                                      View All
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </Link>
                    </li>
              </li>
            </ul>
            <div className="header__cart__price">
            <b> item:</b> <span>${Total}</span>
            </div>
          </div>
          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="logo" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li>
                  <Link to="#">Spanis</Link>
                </li>
                <li>
                  <Link to="#">English</Link>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <Link to="/login">
                <i className="fa fa-user" /> Login
              </Link>
            </div>
          </div>

          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <Link to="#">
              <i className="fa fa-facebook" />
            </Link>
            <Link to="#">
              <i className="fa fa-twitter" />
            </Link>
            <Link to="#">
              <i className="fa fa-linkedin" />
            </Link>
            <Link to="#">
              <i className="fa fa-pinterest-p" />
            </Link>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope" />
                hiiio hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        {/* Humberger End */}
        {/* Header Section Begin */}
        <header className="header">
          <div className="header__top">
            <div className="" style={{ height: "60px" }}>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope" />
                        hello@colorlib.com
                      </li>
                      <li>Free Shipping for all Order of $99</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <Link to="#">
                        <i className="fa fa-facebook" />
                      </Link>
                      <Link to="#">
                        <i className="fa fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fa fa-linkedin" />
                      </Link>
                      <Link to="#">
                        <i className="fa fa-pinterest-p" />
                      </Link>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt="logo" />
                      <div>English</div>
                      <span className="arrow_carrot-down" />
                      <ul>
                        <li>
                          <Link to="#">Spanis</Link>
                        </li>
                        <li>
                          <Link to="#">English</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <Link to="/login">
                        {token ? (
                          <Link onClick={logout}>
                            <i className="fa "></i> Logout
                          </Link>
                        ) : (
                          <Link to="/login">
                            <i className="fa fa-lock"></i> Login
                          </Link>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-md-4 col-sm-6">
                <div className="header__logo ">
                  <Link to="#">
                    <img src="img/logo.png" alt="image" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    onChange={(e)=>onInputChange(e)}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-success text-white" >
                  <Link to={`/search?query=${encodeURIComponent(search)}`} 
                  onChange={()=>Setsearchparam({query:search})} >
                    Search
                    </Link>
                  </button>
                </form>
                <nav className="header__menu d-md-flex align-items-center justify-content-between btn ">
                  <ul className="d-flex align-items-center ">
                    <li className=" nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>

                    <li className="navbar-item dropdown-megamenu">
                      <Dropdown
                        show={showMegaMenu}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link className="nav-link">Categories</Link>
                        <Dropdown.Menu
                          className="mega-menu"
                          style={{
                            height: "auto",
                            width: "1000px",
                            marginLeft: "-220px",
                            paddingLeft: "30px",
                          }}
                        >
                          <div className="row">
                            {Category.slice(0, 10).map((el) => (
                              <div key={el.category_id} className="col-sm-3">
                                <h5 className="font-weight-bold pt-2 text-info text-center">
                                  <Link to="/shop_grid">
                                    {el.category_name}
                                  </Link>
                                </h5>
                                <ul>
                                  {SubCategory.filter(
                                    (subcategory) =>
                                      subcategory.subcategory_category_id ===
                                      el.category_id
                                  )
                                    .slice(0, 50)
                                    .map((category) => (
                                      <li
                                        key={category.subcategory_id}
                                        className="ms-4"
                                      >
                                        <Link
                                          to={`/subcatview/${el.category_id}/${category.subcategory_id}`}
                                        >
                                          {category.subcategory_name}
                                        </Link>
                                      </li>
                                    ))}
                                  <Link to="/shop_grid">
                                    <Button variant="outline-primary">
                                      View All
                                    </Button>
                                  </Link>
                                </ul>
                              </div>
                            ))}
                          </div>
                          <Link href="">Categories</Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li>
                      <Link to="/all_prodshop/0">Shop</Link>
                    </li>

                    <li className="navbar-item dropdown-megamenu">
                      <Dropdown
                        show={showMegaBrand}
                        onMouseEnter={handleBrandMouseEnter}
                        onMouseLeave={handleBrandMouseLeave}
                      >
                        <Link className="nav-link">Brands</Link>
                        <Dropdown.Menu
                          className="mega-menu"
                          style={{
                            height: "auto",
                            width: "1000px",
                            marginLeft: "-520px",
                            paddingLeft: "30px",
                          }}
                        >
                          <div className="row">
                            {Brand.slice(0, 20).map((brand) => (
                              <div key={brand.brand_id} className="col-sm-2">
                                <h5 className="font-weight-medium  text-info">
                                  <Link to={`/brands/${brand.brand_id}`}>
                                    {brand.brand_name}
                                  </Link>
                                </h5>
                              </div>
                            ))}
                          </div>
                          <Link to="/brands">Brands</Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contact</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">About</Link>
                    </li>
                    <li>
  {token ? (
    <Link to="/userview">
      <i className="fa fa-user s_color " /> {user.name}
    </Link>
  ) : (
    <Link to="#">
      <i className="fa fa-user s_color" /> My Account
    </Link>
  )}
</li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-1 col-md-5 col-sm-6">
                <div className="header__cart d-flex">
                  <ul>
                    <li><Link to="/wishlistdetail"><i className="fa fa-heart"></i> <span>{WTotal}</span></Link></li>
                    <li>
                      <Link to="#">
                        <li className="navbar-item dropdown-megamenu">
                          <Dropdown
                            show={showMegaCart}
                            onClick={handleCartMouseEnter}
                            onMouseLeave={handleCartMouseLeave}
                          >
                            <i className="fa fa-shopping-bag" />
                            <li></li>
                            <span>{cartLength}</span>
                            <Dropdown.Menu
                              className="mega-menu"
                              style={{
                                height: "auto",
                                width: "auto",
                                marginLeft: "-350px",
                                paddingLeft: "30px",
                              }}
                            >
                              <div className="row">
                                <div className="">
                                  <table className="table table-image">
                                    <thead>
                                      <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scope="col">Image</th>
                                        <th scope="col"> Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Cart.slice(0, 3).map((cart, index) => (
                                        <tr key={cart.cart_id}>
                                          <th scope="row">{index+1}</th>
                                          <td className="w-25">
                                            <img
                                              src={
                                                "https://vsmart.ajspire.com/uploads/product_image/" +
                                                cart.product_image
                                              }
                                              className="img-fluid img-thumbnail"
                                              alt="Sheep"
                                            />
                                          </td>
                                          <td>{cart.english_name}</td>
                                          <td>Rs.{cart.cart_price}</td>
                                          <td>{cart.cart_product_qty}</td>
                                          <td>
                                            {cart.cart_price *
                                              cart.cart_product_qty}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <Link to="/cartdetails">
                                    
                                    <button className="btn btn-info">
                                      View All
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </li>
                      </Link>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                   <b> item:</b> <span>${Total}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`humberger__open ${showHamburgerMenu ? "active" : ""}`}
              onClick={handleHamburgerClick} // Handle hamburger icon click to toggle the menu
            >
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
        <div
          className={`humberger__menu__overlay ${
            showHamburgerMenu ? "active" : ""
          }`}
          onClick={handleHamburgerOverlayClick}
        />
        <div
          className={`humberger__menu__wrapper ${
            showHamburgerMenu ? "show__humberger__menu__wrapper" : ""
          }`}
        >
          {/* Hamburger menu content */}
          <div className="humberger__menu__logo">
            <Link to="#">
              <img src="img/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <Link to="#">
                  <i className="fa fa-heart" /> <span>1</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <li className="navbar-item dropdown-megamenu">
                    <Dropdown
                      show={showMegaCart}
                      onClick={handleCartMouseEnter}
                      onMouseLeave={handleCartMouseLeave}
                    >
                      <i className="fa fa-shopping-bag" />
                      <li></li>
                      <span>{cartLength}</span>
                      <Dropdown.Menu
                        className="mega-menu"
                        style={{
                          height: "auto",
                          width: "auto",
                          marginLeft: "-350px",
                          paddingLeft: "30px",
                        }}
                      >
                        <div className="row">
                          <div className="">
                            <table className="table table-image">
                              <thead>
                                <tr>
                                  <th scope="col">Sr.No</th>
                                  <th scope="col">Image</th>
                                  <th scope="col"> Name</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Cart.map((cart, index) => (
                                  <tr key={cart.cart_id}>
                                    <th scope="row">{index++}</th>
                                    <td className="w-25">
                                      <img
                                        src={
                                          "https://vsmart.ajspire.com/uploads/product_image/" +
                                          cart.product_image
                                        }
                                        className="img-fluid img-thumbnail"
                                        alt="Sheep"
                                      />
                                    </td>
                                    <td>{cart.english_name}</td>
                                    <td>Rs.{cart.cart_price}</td>
                                    <td>{cart.cart_product_qty}</td>
                                    <td>
                                      {cart.cart_price * cart.cart_product_qty}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <Link to="/cartdetails">
                            
                              <button className="btn btn-info">View All</button>
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </Link>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>${Total}</span>
            </div>
          </div>

          <div className="humberger__menu__widget">
            <div className="header__top__right__language">
              <img src="img/language.png" alt="logo" />
              <div>English</div>
              <span className="arrow_carrot-down" />
              <ul>
                <li>
                  <Link to="#">Spanis</Link>
                </li>
                <li>
                  <Link to="#">English</Link>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <Link to="/login">
                {token ? (
                  <Link onClick={logout}>
                    <i className="fa "></i> Logout
                  </Link>
                ) : (
                  <Link to="/login">
                    <i className="fa fa-lock"></i> Login
                  </Link>
                )}
              </Link>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <nav className="">
                  <ul className="list-unstyled header-menu">
                    <li className="active">
                      <Link to="/">
                        <FaHome /> Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop_grid">
                        <FaShoppingCart /> Shop
                      </Link>
                    </li>
                    {/* ... Other menu items ... */}
                    <li>
                      <Link to="/blog">
                        <FaBlog /> Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <FaEnvelope /> Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div id="mobile-menu-wrap" />
          <div className="header__top__right__social">
            <Link to="#">
              <i className="fa fa-facebook" />
            </Link>
            <Link to="#">
              <i className="fa fa-twitter" />
            </Link>
            <Link to="#">
              <i className="fa fa-linkedin" />
            </Link>
            <Link to="#">
              <i className="fa fa-pinterest-p" />
            </Link>
          </div>
          <div className="humberger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope" />
                hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>

          {/* ... Add your content here ... */}
        </div>
        {/* ... Other header content ... */}
      </div>
    </>
  );
};

export default Header;
