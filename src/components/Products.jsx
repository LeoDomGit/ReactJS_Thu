/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

function Product({ name, image, price, discount, slug, content }) {
  const formattedPrice = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);
  return (
    // <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="rounded shadow border border-secondary-subtle position-relative fruite-item mt-2">
      <div className="fruite" style={{ height: 200 }}>
        <Link to={`/${slug}`}>
          <img src={process.env.REACT_APP_IMG_URL + "/" + image} className="img-fluid w-50 rounded mt-2 " alt={name} />
        </Link>
      </div>
      <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
        Mới
      </div>
      <div className="p-4 text-start">
        <h5 style={{ height: "95px" }}>{name}</h5>
        <p style={{ height: "50px" }}>{content}Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="d-flex justify-content-between flex-lg-wrap">
          <p className="text-dark fs-5 fw-bold mb-0">{formattedPrice}</p>
          <a href="#/" className="btn border border-secondary rounded-pill px-3 text-primary">
            <i className="fa fa-cart-plus text-primary" /> Thêm vào giỏ
          </a>
        </div>
      </div>
    </div>
  );  
}

export default Product;
