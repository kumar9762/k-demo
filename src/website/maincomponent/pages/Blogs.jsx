import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Blogs = () => {
  const [Category,SetCategory]=useState([]);
  const getCategory=()=>(
    fetch('https://vsmart.ajspire.com/api/categories').then(res=>{
      return res.json();
    }).then(data=>{
      SetCategory(data.categories);
      // console.log(data.categories);
    }).catch(error => {
      console.log('Error', error);
    })
  )
  useEffect(()=>{
    getCategory();
  })
  return (
    <div>
      <div>
        {/* Breadcrumb Section Begin */}
        <section className="breadcrumb-sectio set-bg"
          style={{
            backgroundImage: "url('img/breadcrumb.jpg')",
            height: 400,marginTop:"200px"
          }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="breadcrumb__text">
                  <h2>Blog</h2>
                  <div className="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Blog Section Begin */}
        <section className="blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="blog__sidebar">
                  <div className="blog__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit"><span className="icon_search" /></button>
                    </form>
                  </div>
                  <div className="blog__sidebar__item " style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <h4>Categories</h4>
                    {Category.map((category) => (
                      <ul>
                        <li><a href="#" className='btn btn-success text-white'>{category.category_name}</a></li>

                      </ul>
                    ))}

                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Recent News</h4>
                    <div className="blog__sidebar__recent">
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="img/blog/sidebar/sr-1.jpg" alt />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="img/blog/sidebar/sr-2.jpg" alt />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                      <a href="#" className="blog__sidebar__recent__item">
                        <div className="blog__sidebar__recent__item__pic">
                          <img src="img/blog/sidebar/sr-3.jpg" alt />
                        </div>
                        <div className="blog__sidebar__recent__item__text">
                          <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                          <span>MAR 05, 2019</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="blog__sidebar__item">
                    <h4>Search By</h4>
                    <div className="blog__sidebar__item__tags">
                    {Category.map((category) => (
                      
                        <a href="#" className='btn btn-info'>{category.category_name}</a>

                      
                    ))}
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-2.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-3.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Visit the clean farm in the US</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-1.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-4.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-4.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">The Moment You Need To Remove Garlic From The Menu</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img src="img/blog/blog-6.jpg" alt />
                      </div>
                      <div className="blog__item__text">
                        <ul>
                          <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                          <li><i className="fa fa-comment-o" /> 5</li>
                        </ul>
                        <h5><a href="#">Cooking tips make cooking simple</a></h5>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                          quaerat </p>
                        <a href="#" className="blog__btn">READ MORE <span className="arrow_right" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="product__pagination blog__pagination">
                      <a href="#">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#"><i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog Section End */}
      </div>


    </div>
  )
}

export default Blogs