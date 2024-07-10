/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Feadturs from "../components/Feadturs";
import Product from "../components/Products";

function Shop() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    if (limit == 5) {
      fetch(process.env.REACT_APP_API_URL + "/products")
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.data);
          setTotal(res.total);
        });
    }
    fetch(process.env.REACT_APP_API_URL + "/products?limit=" + limit)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, [limit]);
  console.log("products", products);
  // const changeLimit = () => {
  //   if (limit == 0) {
  //     setLimit(6);
  //   } else {
  //     setLimit(limit + 3);
  //   }
  // };
  return (
    <>
      <Header />
      <div className="container-fluid fruite">
        <div className="container">
          {/* <h1 className="mb-4">Fresh fruits shop</h1> */}
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input type="search" className="form-control p-3" placeholder="Từ khóa..." aria-describedby="search-icon-1" />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
                <div className="col-6" />
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Sắp xếp:</label>
                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                      <option value="volvo">Gía thấp</option>
                      <option value="saab">Gía cao</option>
                      <option value="opel">Mới nhất</option>
                      <option value="audi">Ngẫu nhiên</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12 text-start">
                      <div className="mb-3">
                        <h4>Danh mục</h4>
                        <ul className="list-unstyled fruite-categorie">
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-arrow-right me-2" />
                                Tẩy trang
                              </a>
                              <span>(3)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-arrow-right me-2" />
                                Sửa rửa mặt
                              </a>
                              <span>(5)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-arrow-right me-2" />
                                Toner
                              </a>
                              <span>(2)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-arrow-right me-2" />
                                Dưỡng ẩm
                              </a>
                              <span>(8)</span>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-arrow-right me-2" />
                                Chống nắng
                              </a>
                              <span>(5)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-lg-12">
                      <div className="mb-3">
                        <h4 className="mb-2">Gía</h4>
                        <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min={0} max={500} defaultValue={0} oninput="amount.value=rangeInput.value" />
                        <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">
                          0
                        </output>
                      </div>
                    </div> */}
                    <div className="col-lg-12 text-start">
                      <div className="mb-3 ">
                        <h4>Thương hiệu</h4>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-1" name="Categories-1" defaultValue="Beverages" />
                          <label htmlFor="Categories-1"> Cocoon</label>
                        </div>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-2" name="Categories-1" defaultValue="Beverages" />
                          <label htmlFor="Categories-2"> La Roche Posay</label>
                        </div>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-3" name="Categories-1" defaultValue="Beverages" />
                          <label htmlFor="Categories-3"> Klairs</label>
                        </div>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-4" name="Categories-1" defaultValue="Beverages" />
                          <label htmlFor="Categories-4"> Simple</label>
                        </div>
                        <div className="mb-2">
                          <input type="radio" className="me-2" id="Categories-5" name="Categories-1" defaultValue="Beverages" />
                          <label htmlFor="Categories-5"> Clio</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {products.length > 0 &&
                      products.map((product, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-4" key={index}>
                          <Product name={product.name} image={product.image} price={product.price} slug={product.slug} discount={product.discount} />
                        </div>
                      ))}
                    {/* <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Apricots</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Banana</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Mới
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img src="img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                              <i className="fa fa-shopping-bag me-2 text-primary" /> Thêm vào giỏ
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">
                          «
                        </a>
                        <a href="#" className="active rounded">
                          1
                        </a>
                        <a href="#" className="rounded">
                          2
                        </a>
                        <a href="#" className="rounded">
                          3
                        </a>
                        <a href="#" className="rounded">
                          4
                        </a>
                        <a href="#" className="rounded">
                          5
                        </a>
                        <a href="#" className="rounded">
                          6
                        </a>
                        <a href="#" className="rounded">
                          »
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;
