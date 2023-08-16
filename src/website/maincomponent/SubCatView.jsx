import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Slider2 from "./pages/Slider2";
import { FaHome } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const SubCatView = () => {
  let { cat_id, sub_id } = useParams();

  //Product
  const [Category, setCategory] = useState([]);
  const [Category_, setCategory_] = useState([]);
  const [SubCategory_, setSubCategory_] = useState([]);
  const [Cat, setCat] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [Sub, setSub] = useState([]);
  const [Count, setCount] = useState([]);
  const [Count1, setCount1] = useState([]);

  const getSubCat = () => {
    fetch(` https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.categories);
        setCategory(data.category.data);
        setCategory_(data.category_);
        setSubCategory_(data.subcategory_);
        //console.log("hi");
        //console.log(data.subcategory_);
        setCat(data.cat);
        setBrand(data.brand);
        setSub(data.sub);
        setCount(data.count);
        setCount1(data.count1);
      })
      .catch((error) => {
        console.log("Error", error);
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

  // const handleDragStart = (e) => e.preventDefault();

  // const items = [
  //   <img src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg" onDragStart={handleDragStart} role="presentation" />,
  //   <img src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg" onDragStart={handleDragStart} role="presentation" />,
  //   <img src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg" onDragStart={handleDragStart} role="presentation" />,
  // ];

  useEffect(() => {
    getSubCat();
  }, [cat_id, sub_id]);

  return (
    <>
      <div>
        <div
          id="header-carousel"
          className="carousel slide align-center"
          data-ride="carousel"
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
                <div className="container  text-dark font-weight-bold" style={{marginLeft:'-200px'}}>
                  <h1 style={{ fontWeight: "bold", fontSize: "35px" }}>
                    {Category_.category_name}
                  </h1>
                  <h3 style={{ fontWeight: "normal", fontSize: "30px" }}>
                    <Link to="/" style={{ color: "black" }}>
                       Home
                    </Link>
                    /<b>{SubCategory_.subcategory_name}</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-3 rounded-circle">
          {/* <AliceCarousel mouseTracking items={items}
         /> */}
          {/* <AliceCarousel 
            duration={400}
            autoPlay={true}
            startIndex={1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            autoPlayInterval={2000}
          >
            <img
              src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
              className=" rounded-pill"
            />
            <img
              src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
              className=" rounded-pill"
            />
            <img
              src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
              className=" rounded-pill"
            />
            <img
              src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
              className=" rounded-pill"
            />
            <img
              src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
              className=" rounded-pill"
            />
          </AliceCarousel> */}
        </div>
        <div className="container align-center carousel-inner" style={{ marginTop: "30px", marginLeft: "auto",backgroundColor:'darkgray' }}>
          <AliceCarousel className='ms-2'
            mouseTracking
            items={Sub.map((subslider) => (
              <div
                key={subslider.subcategory_image}
                className="slider-image-container ms-5" 
              >
                <button className="btn btn-outline-success hover mt-5">
                <img
                  src={subslider.subcategory_image}
                  alt={subslider.Iceream}
                  height={"100px"}
                  width={"150px"}
                  className="slider-image  "
                />
                </button>
                <div className="carousel-caption text-danger">
                  {subslider.subcategory_name}
                </div>
              </div>
            ))}
           
            responsive={{
              0: { items: 1 },
              576: { items: 2 },
              768: { items: 3 },
              992: { items: 4 },
              1200: { items: 5 },
            }}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls
              disableButtonsControls
          />
        </div>
        {/* Breadcrumb Section Begin */}
        {/* <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url('img/background.jpg')" }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb__text">
            <h2>Organi Shop</h2>
            <div className="breadcrumb__option">
              <a href="./index.html">Home</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
        {/* Breadcrumb Section End */}
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
                    {Cat.map((cat) => (
                      <div key={cat.category_id} className="category">
                        <label className="btn btn-danger category-label">
                          <input
                            type="checkbox"
                            className="category-checkbox"
                            onClick={() => toggleCategory(cat.category_id)}
                          />
                          {cat.category_name}
                        </label>

                        {expandedCategory === cat.category_id && (
                          <ul className="subcategory-list">
                            {Sub.filter(
                              (subcategory) =>
                                subcategory.subcategory_category_id ===
                                cat.category_id
                            ).map((subcategory) => (
                              <li
                                key={subcategory.subcategory_id}
                                className="subcategory"
                              >
                                <Link
                                  to={`/subcatview/${cat.category_id}/${subcategory.subcategory_id}`}
                                  className="subcategory-name"
                                >
                                  {subcategory.subcategory_name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                  <h4>Filter By Brand</h4>
                  <div
                    className="sidebar__item bg-info rounded-2"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {Brand.map((brand) => (
                      <ul>
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
                            to={`/brands/${brand.brand_id}`}
                            style={{ flex: "1", }}
                          >
                            {brand.brand_name}
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
                      {Category.map((item, index) => {
                        if (index % 3 === 0) {
                          return (
                            <Carousel.Item key={index}>
                              <div className="row">
                                {Category.slice(index, index + 3).map(
                                  (item, subIndex) => (
                                    <div
                                      className="col-lg-4 col-lg-3 col-md-4 col-sm-4 mt-4 mb-3"
                                      key={index + subIndex}
                                    >
                                      <div className="product__discount__item"  style={{
                                              transform: "skewY(-1deg)",
                                              border: "2px solid orange",
                                              borderRadius: "10px",
                                            }}>
                                        <div
                                          className="product__discount__item__pic set-bg"
                                          data-setbg="img/product/discount/pd-1.jpg"
                                          style={{
                                            backgroundImage: `url(${item.product_image})`,
                                            border: "1px solid #ccc",
                                            width: "300px",
                                          }}
                                        >
                                          <div className="product__discount__percent">
                                            <i className="fa fa-inr"></i>{" "}
                                            {item.mrp_price - item.sale_price}{" "}
                                            Off
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
                                            <a href="#">{item.english_name}</a>
                                          </h5>
                                          <div className="product__item__price">
                                            <b>
                                              MRP
                                              <del className="text-danger">
                                                {item.mrp_price}
                                              </del>{" "}
                                              <span className="text-success">
                                                {item.sale_price}
                                                <small>/only</small>
                                              </span>
                                            </b>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
                              </div>
                            </Carousel.Item>
                          );
                        }
                        return null;
                      })}
                    </Carousel>
                  </div>
                  <div className="filter__item">
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
                            <span>{Category.length}</span> Products found
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
                  <div className="row">
                    {Category.map((item) => {
                      return (
                        <div className="col-lg-4 col-lg-3 col-md-4 col-sm-4">
                          <div className="product__discount__item mt-5 mb-3"  style={{
                              transform: "skewY(-3deg)",
                              border: "1px solid green",
                              width: "100%",
                              borderRadius: "20px",
                              boxShadow: "0px 4px 6px rgba(255, 105, 180, 0.3)",
                            }}>
                            <div
                              className="product__discount__item__pic set-bg"
                              data-setbg="img/product/discount/pd-1.jpg"
                              style={{
                                backgroundImage: `url(${item.product_image})`,
                                border: "1px solid #ccc",
                                width: "300px",
                              }}
                            >
                              <div className="product__discount__percent">
                                <i className="fa fa-inr"></i>{" "}
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
                                <a href="#">{item.english_name}</a>
                              </h5>
                              <div className="product__item__price">
                                <b>
                                  MRP
                                  <del className="text-danger">
                                    {item.mrp_price}
                                  </del>
                                  <span className="text-success">
                                    {item.sale_price}
                                    <small>/only</small>
                                  </span>
                                </b>
                              </div>
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

export default SubCatView;
