<nav className="header__menu ">
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
                          <a href="">Categories</a>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>

                    <li>
                      <Link to="/shop_grid">Shop_grid</Link>
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