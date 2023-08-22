import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Auth_user from "../../authentication/Auth_user";

const Brands = () => {
  const {http,user,token}=Auth_user();

  const [brand, setBrand] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brands_, setBrands_] = useState({});
  const [featured, setFeatured] = useState([]);
  const [cat, setCat] = useState([]);
  const [brandss, setBrandss] = useState([]);
  const [id, setId] = useState("208");
  const [count, setCount] = useState({});
  const [count1, setCount1] = useState({});
  let { brand_id } = useParams();

  
  const getBrand =  () => {


    http.get(`/product-shop/${brand_id}`).then((res) => {
      //setproduct(response.data.products.data);
      setBrand(res.data.brand);
      setCat(res.data.cat);
      setBrands_(res.data.brands_);
      setBrandss(res.data.brandss);
      setFeatured(res.data.featured);
      // console.log("brands:",data.brandss);

      //console.log("featured:", data.featured);

      // console.log("id:", data.id);
      //console.log("count:", data.count);
      //  console.log("count1:", data.count1);

      //console.log(data.brand);
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };
  const [productid, Setproductid] = useState([]);
  const { product_id } = useParams();

  const GetproductId = (product_id) => {
    console.log("cart", product_id);
    http.get(`/add-to-cart/${product_id}`).then((res) => {
      Setproductid(res.data.products);
    });
    console.log("hi", product_id);
  };

  const handleAddToCart = (product_id) => {
    GetproductId(product_id);
  };
  useEffect(() => {
    getBrand();
    GetproductId(product_id);
  }, [brand_id,product_id]);
  return (
    <>
      <div>
        <div
          id="header-carousel"
          className="carousel slide align-center"
          data-ride="carousel"
          style={{marginTop:"200px"}}
        >
          <div className="carousel-inner">
            <div className="img">
              <img
                src="https://img.freepik.com/free-photo/notebook-with-tomatoes-wooden-bottom_23-2148505641.jpg?w=2000"
                style={{
                  height: "300px", // Adjust the height as needed
                  width: "100%",
                  opacity: "0.9",
                  color: "green",
                }}
                className="d-block w-100"
                alt="Carousel Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100">
                <div
                  className="container  text-dark font-weight-bold"
                  style={{
                    marginLeft: "-200px",
                    textShadow: "5px 8px 3px rgba(255, 105, 300, 0.9)",
                  }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>
                    {brands_ && brands_.brand_name}
                  </h1>
                  <h3 style={{ fontWeight: "normal", fontSize: "20px" }}>
                    <Link to="/" style={{ color: "black" }}>
                      Home
                    </Link>
                    /<b>{brands_ && brands_.brand_name}</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar border-1">
                  <h4>Filter By Category</h4>
                  <div
                    className="sidebar__item bg-warning rounded-2 text-bg-success"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {cat.map((cat) => (
                      <div key={cat.category_id} className="category">
                        <label className="btn btn-danger category-label">
                          <input
                            type="checkbox"
                            className="category-checkbox"
                            onClick={() => toggleCategory(cat.category_id)}
                          />
                          <Link to="/all_prodshop" className="text-white ">
                            {cat.category_name}
                          </Link>
                        </label>
                      </div>
                    ))}
                  </div>
                  <h4>Filter By Brand</h4>
                  <div
                    className="sidebar__item bg-info rounded-2"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {brandss.map((el) => (
                      <ul key={el.brand_id}>
                        <li
                          className="btn btn-success"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "180px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={{ marginRight: "10px" }}
                          />
                          <Link
                            to={`/brands/${el.brand_id}`}
                            style={{ flex: "1" }}
                          >
                            {el.brand_name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>

                  <div className="sidebar__item">
                    <div className="latest-product__text">
                      <h4>Latest Products</h4>
                      <div className="latest-product__slider ">
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img src="img/latest-product/lp-1.jpg" alt />
                            </div>
                            <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-7 ps-1">
                <div className="product__discount">
                  <div className="section-title product__discount__title">
                    <h2>Sale Off</h2>
                  </div>

                  <div className="row">
                    <Carousel interval={3000}>
                      {brand.map((item, index) => {
                        if (index % 3 === 0) {
                          return (
                            <Carousel.Item key={index}>
                              <div className="row">
                                {brand
                                  .slice(index, index + 3)
                                  .map((item, subIndex) => {
                                    const diff =
                                      item.mrp_price - item.sale_price;
                                    if (diff !== 0) {
                                      return (
                                        <div
                                          className="col-lg-4 col-md-4 col-sm-4 mt-4 mb-3"
                                          key={index + subIndex}
                                        >
                                          <div
                                            className="product__discount__item"
                                            style={{
                                              transform: "skewY(-1deg)",
                                              border: "2px solid orange",
                                              borderRadius: "10px",
                                            }}
                                          >
                                            <div
                                              className="product__discount__item__pic set-bg ms-1"
                                              data-setbg="img/product/discount/pd-1.jpg"
                                              style={{
                                                backgroundImage: `url(${item.product_image})`,
                                                border: "1px solid #ccc",
                                                width: "300px",
                                                borderRadius: "10px",
                                                border: "none",
                                              }}
                                            >
                                              <div className="product__discount__percent ">
                                                <i className="fa fa-inr"></i>
                                                {item.mrp_price -
                                                  item.sale_price}
                                                off
                                              </div>
                                              <ul className="product__item__pic__hover">
                                                <li>
                                                  <a href="#">
                                                    <i className="fa fa-heart" />
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="#">
                                                    <i className="fa fa-retweet" />
                                                  </a>
                                                </li>
                                                <li>
                                  <a to={`/all_prodshop/${item.product_id}`}>
                                    {token ? (
                                      <button
                                        className="btn"
                                        onClick={() =>
                                          handleAddToCart(item.product_id)
                                        }
                                      >
                                        <i className="fa fa-shopping-cart"></i>
                                        
                                      </button>
                                    ) : (
                                      <Link to="/login">
                                        <i className="fa fa-shopping-cart"></i>
                                      </Link>
                                    )}
                                  </a>
                                </li>
                                              </ul>
                                            </div>
                                            <div className="product__discount__item__text">
                                              <span>{item.category_name}</span>
                                              <h5>
                                                <a
                                                  href="#"
                                                  className="text-primary"
                                                  style={{
                                                    textShadow:
                                                      "5px 8px 3px rgba(255, 105, 180, 0.9)",
                                                  }}
                                                >
                                                  {item.english_name}
                                                </a>
                                              </h5>
                                              <h6 class="feature-price">
                                                <b>
                                                  {" "}
                                                  MRP
                                                  <del className="text-danger">
                                                    {item.mrp_price}
                                                  </del>{" "}
                                                  <span className="text-success">
                                                    {item.sale_price}
                                                    <small>/only</small>
                                                  </span>
                                                </b>
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })}
                              </div>
                            </Carousel.Item>
                          );
                        }
                        return null;
                      })}
                    </Carousel>
                  </div>

                  <div className="filter__item mt-3">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                          <span>Sort By</span>
                          <select>
                            <option value={0}>Default</option>
                            <option value={0}>Default</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                          <h6>
                            <span>{brand.length}</span> Products found
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3">
                        <div className="filter__option">
                          <span className="icon_grid-2x2" />
                          <span className="icon_ul" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    {brand.map((item) => {
                      return (
                        <div className="col-lg-4 col-lg-3 col-md-4 col-sm-4">
                          <div
                            className="product__discount__item mt-5 mb-3 "
                            style={{
                              transform: "skewY(-3deg)",
                              border: "1px solid green",
                              width: "100%",
                              borderRadius: "20px",
                              boxShadow: "0px 4px 6px rgba(255, 105, 180, 0.3)",
                            }}
                          >
                            <div
                              className="product__discount__item__pic set-bg ms-1"
                              data-setbg="img/product/discount/pd-1.jpg"
                              style={{
                                backgroundImage: `url(${item.product_image})`,
                                border: "1px solid #ccc",
                                width: "300px",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                              }}
                            >
                              <div className="product__discount__percent">
                                <i className="fa fa-inr"></i>
                                {item.mrp_price - item.sale_price} off
                              </div>
                              <ul className="product__item__pic__hover">
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-retweet" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-shopping-cart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product__discount__item__text">
                              <span>{item.category_name}</span>
                              <h5>
                                <a href="#" className="text-info">
                                  {item.english_name}
                                </a>
                              </h5>
                              <h6 class="feature-price">
                                <b>
                                MRP  <del className="text-danger">
                                    {item.mrp_price}
                                  </del>
                                  <span className="text-success">
                                    {item.sale_price}
                                    <small>/only</small>
                                  </span>
                                </b>
                              </h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="product__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
      </div>
    </>
  );
};

export default Brands;
