import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Container, Dropdown, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header3 = () => {
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
            const response = await fetch('https://vsmart.ajspire.com/api/products');
            const data = await response.json();
            SetBrand(data.products.data);
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
        <div className="humberger__menu__overlay" />
            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <a href="#"><img src="img/logo.png" alt /></a>
                </div>
                <div className="humberger__menu__cart">
                    <ul>
                        <li><a href="#"><i className="fa fa-heart" /> <span>1</span></a></li>
                        <li><a href="#"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                    </ul>
                    <div className="header__cart__price">item: <span>$150.00</span></div>
                </div>
                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="img/language.png" alt />
                        <div>English</div>
                        <span className="arrow_carrot-down" />
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div className="header__top__right__auth">
                        <a href="#"><i className="fa fa-user" /> Login</a>
                    </div>
                </div>
                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active"><a href="./index.html">Home</a></li>
                        <li><a href="./shop-grid.html">Shop</a></li>

                        <li><a href="./blog.html">Blog</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>

                <div id="mobile-menu-wrap" />
                <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                </div>
                <div className="humberger__menu__contact">
                    <ul>
                        <li><i className="fa fa-envelope" />hiiio hello@colorlib.com</li>
                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>
            {/* Humberger End */}

            <Navbar expand="lg" className="bg-body-tertiary">

                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to='/'>Home</Link>
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
                          <a href="">Categories</a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="navbar-item dropdown-megamenu">
                      <Dropdown show={showMegaBrand} onMouseEnter={handleBrandMouseEnter} onMouseLeave={handleBrandMouseLeave}>
                        <a href="">Brands</a>
                        <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-520px', paddingLeft: '30px' }}>
                          <div className="row">
                            {Brand.slice(0, 10).map((items) => (
                              <div key={items.product_id} className="col-sm-2">
                                <h5 className="font-weight-bold pt-2 text-info">{items.brand_name}</h5>

                              </div>
                            ))}
                          </div>
                          <a href="">Brands</a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                           
                      <Link className='nav-link' to="/shop_grid">Shop_grid</Link>
                   
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header3