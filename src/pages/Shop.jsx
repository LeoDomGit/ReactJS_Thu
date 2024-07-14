/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Products";
import Categories from "../components/Categories";
import Brands from "./Brands";

function Shop() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); // Store the original product list
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(8);
  const [categories, setCategories] = useState([]);
  const [totalCategories, setTotalCategories] = useState(0);
  const [limitCategories, setLimitCategory] = useState(6);
  const [brands, setBrands] = useState([]);
  const [totalBrands, setTotalBrands] = useState(0);
  const [limitBrands, setLimitBrand] = useState(6);
  const [sortOrder, setSortOrder] = useState('default'); // Add state for sorting

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  useEffect(() => {
    sortProducts(sortOrder);
  }, [sortOrder]);

  const fetchProducts = () => {
    let url = process.env.REACT_APP_API_URL + "products?limit=" + limit;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setOriginalProducts(res); // Store the original product list
        setTotal(res.total);
      });
  };

  // Sorting logic
  const sortProducts = (order) => {
    let sortedProducts = [...products];

    if (order === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'newest') {
      sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (order === 'random') {
      sortedProducts.sort(() => Math.random() - 0.5);
    } else {
      sortedProducts = [...originalProducts]; // Reset to the original product list
    }

    setProducts(sortedProducts);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "categories?limit=" + limitCategories)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, [limitCategories]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "brands?limit=" + limitBrands)
      .then((res) => res.json())
      .then((res) => {
        setBrands(res);
      });
  }, [limitBrands]);

  const getProductCountForCategory = (categoryId) => {
    return products.filter((product) => product.idCate === categoryId).length;
  };

  return (
    <>
      <Header />
      <div className="container-fluid fruite">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="input-group w-100 mx-auto d-flex">
                    <input
                      type="search"
                      className="form-control p-3"
                      placeholder="Từ khóa..."
                      aria-describedby="search-icon-1"
                    />
                    <span id="search-icon-1" className="input-group-text p-3">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
                <div className="col-6" />
                <div className="col-xl-3">
                  <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                    <label htmlFor="fruits">Sắp xếp:</label>
                    <select
                      id="fruits"
                      name="fruitlist"
                      className="border-0 form-select-sm bg-light me-3"
                      form="fruitform"
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="default">Mặc định</option>
                      <option value="low">Giá thấp</option>
                      <option value="high">Giá cao</option>
                      <option value="newest">Mới nhất</option>
                      <option value="random">Ngẫu nhiên</option>
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
                            {categories.length > 0 &&
                              categories.map((categorie, index) => (
                                <div
                                  className="d-flex justify-content-between fruite-name"
                                  key={index}
                                >
                                  <Categories
                                    name={categorie.name}
                                    status={categorie.status}
                                    productCount={getProductCountForCategory(categorie.id)}
                                  />
                                </div>
                              ))}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12 text-start">
                      <div className="mb-3 ">
                        <h4>Thương hiệu</h4>
                        {brands.length > 0 &&
                          brands.map((brand, index) => (
                            <div className="mb-2" key={index}>
                              <Brands name={brand.name} />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="position-relative">
                        <img
                          src="https://image.hsv-tech.io/700x0/bbx/common/1b8bab8a-a1db-49d1-9356-afc5c982a2af.webp"
                          className="img-fluid w-100 rounded"
                          style={{ height: 350 }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    {products.length > 0 &&
                      products.map((product, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-4" key={index}>
                          <Product
                            name={product.name}
                            slug={product.slug}
                            image={product.image}
                            price={product.price}
                          />
                        </div>
                      ))}
                    <div className="col-12">
                      <div className="pagination d-flex justify-content-center mt-5">
                        <a href="#" className="rounded">«</a>
                        <a href="#" className="active rounded">1</a>
                        <a href="#" className="rounded">2</a>
                        <a href="#" className="rounded">3</a>
                        <a href="#" className="rounded">4</a>
                        <a href="#" className="rounded">5</a>
                        <a href="#" className="rounded">6</a>
                        <a href="#" className="rounded">»</a>
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
