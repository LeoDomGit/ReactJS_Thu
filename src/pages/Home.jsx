/* eslint-disable */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Feadturs from "../components/Feadturs";
import Product from "../components/Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    if (limit == 4) {
      fetch(process.env.REACT_APP_API_URL + "products")
        .then((res) => res.json())
        .then((res) => {
          setProducts(res.data);
          setTotal(res.total);
        });
    }
    fetch(process.env.REACT_APP_API_URL + "products?limit=" + limit)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, [limit]);
  console.log("products", products);
  const changeLimit = () => {
    if (limit == 0) {
      setLimit(8);
    } else {
      setLimit(limit + 4);
    }
  };
  return (
    <div>
      <Header />
      <Slider />
      <Feadturs />
      <div className="container-fluid fruite">
        <div className="container">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Sản phẩm mới</h1>
              </div>
            </div>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {products.length > 0 &&
                        products.map((product, index) => (
                          <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
                            <Product name={product.name} image={product.image} price={product.price} slug={product.slug} discount={product.discount} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row mb-4 text-center py-5">
                <div className="col-md py-5">
                  {limit < total && (
                    <button className="btn btn-outline-primary" onClick={(e) => changeLimit()}>
                      Xem thêm
                    </button>
                  )}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
