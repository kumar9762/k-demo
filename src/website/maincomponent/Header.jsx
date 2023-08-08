import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';


const Header = () => {
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

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
  
  const getCategory = async () => {
    try {
      const response = await fetch('https://vsmart.ajspire.com/api/categories');
      const data = await response.json();
      setCategory(data.categories);
      //console.log(data.categories);

      for (const category of data.categories) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Add a 1-second delay before fetching subcategories
        getSubcategories(category.category_id);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getSubcategories = async (category_id) => {
    try {
      const response = await fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`);
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      const newSubcategory = data.subcategories;

      setSubCategory((prevSubCategory) => {
        const filterSubcategory = newSubcategory.filter(
          (newSub) => !prevSubCategory.some((prev) => prev.subcategory_id === newSub.subcategory_id)
        );
        return [...prevSubCategory, ...filterSubcategory];
      });
    } catch (error) {
      console.error('Error fetching subcategories:', error);
    }
  };

  const [Brand, SetBrand] = useState([]);

    const getBrand = async () => {
        try {
            const response = await fetch('https://vsmart.ajspire.com/api/brands');
            const data = await response.json();
            SetBrand(data.brands);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

  useEffect(() => {
    getCategory();
    getBrand();
  }, []);

  return (
    <div>
      <div>
        {/* Header Section Begin */}
        <header className="header">
          {/* Header Top Section Begin */}
          <div className="header__top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-lg-3 col-md-4 col-sm-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope" /> hello@colorlib.com
                      </li>
                      <li>Welcome to VS Mart in Your Dream Online Store!</li>
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
                      <img src="img/language.png" alt="" />
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
                     <Link to='/login'><i className="fa fa-user" /> Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          {/* Header Top Section End */}

          {/* Header Bottom Section Begin */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src="https://vsmart.ajspire.com/images/logo1.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-2">
              
                <nav className="navbar header__menu na">
                  <ul>
                    <li className=" nav-item">
                    
                      <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="navbar-item dropdown-megamenu">
                      <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a className="nav-link">Categories</a>
                        <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-220px', paddingLeft: '30px' }}>
                          <div className="row">
                            {Category.slice(0, 10).map((category) => (
                              <div key={category.category_id} className="col-sm-3">
                                <h5 className="font-weight-bold pt-2 text-info text-center"><Link to='/shop_grid'>{category.category_name}</Link></h5>
                                <ul>
                                  {SubCategory.filter((subcategory) => subcategory.subcategory_category_id === category.category_id)
                                    .slice(0, 6)
                                    .map((category) => (
                                      <li key={category.subcategory_id} className="ms-4">
                                        <Link to='/shop_grid'>{category.subcategory_name}</Link>
                                      </li>
                                    ))}
                                  <Link to="/shop_grid">
                                    <Button variant="outline-primary">View All</Button>
                                  </Link>
                                </ul>
                              </div>
                            ))}
                          </div>
                          <Link to='/shop_grid'>Categories</Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li>
                      <Link to="/shop_grid">Shop_grid</Link>
                    </li>


                    <li className="navbar-item dropdown-megamenu">
                      <Dropdown show={showMegaBrand} onMouseEnter={handleBrandMouseEnter} onMouseLeave={handleBrandMouseLeave}>
                        <a href="" className='nav-link'>Brands</a>
                        <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-520px', paddingLeft: '30px' }}>
                          <div className="row">
                            {Brand.slice(0,15).map((items) => (
                              <div key={items.product_id} className="col-sm-2">
                              <Link to='/shop_grid'><h5 className=" font-weight-medium pt-2 text-info">
                                {items.brand_name}
                                </h5></Link>
                                
                              </div>
                            ))}
                          </div>
                          <Link to="/shop_grid">
                                    <Button variant="outline-primary">View All</Button>
                                  </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li>
                      <Link to='/contactus'>Contact Us</Link>
                    </li>
                    <li>
                      <Link to='/aboutus'>About Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2">
                <div className="header__cart">
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
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
          {/* Header Bottom Section End */}
        </header>
        {/* Header Section End */}
      </div>
    </div>
  );
};

export default Header;
