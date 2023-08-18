import React, { useEffect, useState } from "react";
import { FaHome, FaShoppingCart, FaBlog, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "./Header.css";
import "./Cart.css";
import Auth_user from "../authentication/Auth_user";

const Header = () => {
  const { http, user, logout, token } = Auth_user();
  
  
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

  const getCategory =  () => {
    http.get(`/categories`)
    .then((res)=>{
      setCategory(res.data.categories);
      res.data.categories.forEach((categories)=>{
        getSubcategories(categories.category_id);
      })
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  };

  const getSubcategories =  (category_id) => {
    http.get(`/subcategories/${category_id}`)
    .then((res) => {
      const newsubcategory = res.data.subcategories;
      setSubCategory((previssubcat) => {
        const filtersubcategory = newsubcategory.filter(
          (newsubcategory) => !previssubcat.some((previs) => previs.subcategory_id === newsubcategory.subcategory_id));

        return [...previssubcat, ...filtersubcategory];
      });
  }).catch((e) => {
      console.log(e);
  });
  };

  const [Brand, SetBrand] = useState([]);

  const getBrand = () => {
    http.get(`/brands`)
    .then((res)=>{
      SetBrand(res.data.brands);
     
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  return (
    <>
    <div className="fixed-top">
      {/* Humberger Begin */}
      <div className="humberger__menu__overlay" />
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="img/language.png" alt />
            <div>English</div>
            <span className="arrow_carrot-down" />
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
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
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest-p" />
          </a>
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
          <div className="" style={{height:'60px'}}>
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
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <Link to="/login">
                    {token ? (
                        <Link onClick={logout} ><i class="fa "></i> Logout</Link>
                      ) : (
                        <Link to="/login"><i class="fa fa-lock"></i> Login</Link>
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
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="header__logo ms-2">
                <a href="#">
                  <img src="img/logo.png" alt  className="img-fluid"/>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <nav className="header__menu d-md-flex align-items-center justify-content-md-between">
                <ul className="d-flex align-items-center">
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
                      <a className="nav-link">Categories</a>
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
                                <Link to="/shop_grid">{el.category_name}</Link>
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
                        <a href="">Categories</a>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <Link to="/all_prodshop">Shop</Link>
                  </li>

                  <li className="navbar-item dropdown-megamenu">
                    <Dropdown
                      show={showMegaBrand}
                      onMouseEnter={handleBrandMouseEnter}
                      onMouseLeave={handleBrandMouseLeave}
                    >
                      <a className="nav-link">Brands</a>
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
                                <Link to={`/brands/${brand.brand_id}`}>{brand.brand_name}</Link>
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
                  <a href="#">
                    <i className="fa fa-user s_color " /> {user.name}
                  </a>
                ) : (
                  <a href="#">
                    <i className="fa fa-user s_color" /> My Account
                  </a>
                )}  
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6">
              <div className="header__cart">
                <ul>
                <li>
                    <a href="#">
                      <li className="navbar-item dropdown-megamenu">
                        <Dropdown
                          show={showMegaWish}
                          onClick={handleWishMouseEnter}
                          onMouseLeave={handleWishMouseLeave}
                        >
                          <i className="fa fa-heart" />
                          <Dropdown.Menu
                            className="mega-menu"
                            style={{
                              height: "auto",
                              width: "auto",
                              marginLeft: "-350px",
                              paddingLeft: "30px",
                            }}
                          >
                            <div class="row">
                              <div class="">
                                <table class="table table-image">
                                  <thead>
                                    <tr>
                                      <th scope="col">Day</th>
                                      <th scope="col">Image</th>
                                      <th scope="col">Article Name</th>
                                      <th scope="col">Author</th>
                                      <th scope="col">Words</th>
                                      <th scope="col">Shares</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td class="w-25">
                                        <img
                                          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg"
                                          class="img-fluid img-thumbnail"
                                          alt="Sheep"
                                        />
                                      </td>
                                      <td>
                                        Bootstrap 4 CDN and Starter Template
                                      </td>
                                      <td>Cristina</td>
                                      <td>913</td>
                                      <td>2.846</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <Link to='/wishlistdetail'> <button className="btn btn-info">View All</button></Link>
                              </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                      <li></li> <span>3</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <li className="navbar-item dropdown-megamenu">
                        <Dropdown
                          show={showMegaCart}
                          onClick={handleCartMouseEnter}
                          onMouseLeave={handleCartMouseLeave}
                        >
                          <i className="fa fa-shopping-bag"/><li></li><span>3</span>
                          <Dropdown.Menu
                            className="mega-menu"
                            style={{
                              height: "auto",
                              width: "auto",
                              marginLeft: "-350px",
                              paddingLeft: "30px",
                            }}
                          >
                            <div class="row">
                              <div class="">
                                <table class="table table-image">
                                  <thead>
                                    <tr>
                                      <th scope="col">Day</th>
                                      <th scope="col">Image</th>
                                      <th scope="col">Article Name</th>
                                      <th scope="col">Author</th>
                                      <th scope="col">Words</th>
                                      <th scope="col">Shares</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">2</th>
                                      <td class="w-25">
                                        <img
                                          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg"
                                          class="img-fluid img-thumbnail"
                                          alt="Sheep"
                                        />
                                      </td>
                                      <td>
                                        Bootstrap 4 CDN and Starter Template
                                      </td>
                                      <td>Cristina</td>
                                      <td>913</td>
                                      <td>2.846</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <Link to='/cartdetails'> <button className="btn btn-info">View All</button></Link>
                              </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                     
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
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
          <a href="#">
            <img src="img/logo.png" alt />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>

        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="img/language.png" alt />
            <div>English</div>
            <span className="arrow_carrot-down" />
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user" /> Login
            </a>
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
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest-p" />
          </a>
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
