/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div className="pb-4 mb-4" style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}>
            <div className="row g-4">
              <div className="col-lg-3">
                <Link to="/">
                  <h1 className="text-primary mb-0">True Beauty</h1>
                  <p className="text-secondary mb-0">SkinCare And Makeup</p>
                </Link>
                {/* <a href="/">
                  <h1 className="text-primary mb-0">True Beauty</h1>
                  <p className="text-secondary mb-0">SkinCare And Makeup</p>
                </a> */}
              </div>
              {/* <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="text" placeholder="Nhập Email" />
                  <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0 }}>
                    Đăng ký ngay
                  </button>
                </div>
              </div> */}
              {/* <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <p className="mb-4">"Tỏa Sáng Như Chưa Bao Giờ"</p>
                <Link to="/gioi-thieu" className="btn border-secondary py-2 px-4 rounded-pill text-primary">
                  Đọc thêm
                </Link>
                {/* <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">
                  Đọc thêm
                </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Thông tin</h4>
                <a className="btn-link" href="">
                  Giới thiệu
                </a>
                <a className="btn-link" href="">
                  Liên hệ
                </a>
                <a className="btn-link" href="">
                  Chính sách bảo mật
                </a>
                {/* <a className="btn-link" href="">
                  Terms &amp; Condition
                </a>
                <a className="btn-link" href="">
                  Return Policy
                </a>
                <a className="btn-link" href="">
                  FAQs &amp; Help
                </a> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Tài khoản</h4>
                <a className="btn-link" href="">
                  Thông tin tài khoản
                </a>
                <Link to="/gio-hang" className="btn-link">
                  Giỏ hàng
                </Link>
                {/* <a className="btn-link" href="">
                  Giỏ hàng
                </a> */}
                <a className="btn-link" href="">
                  Đơn hàng
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Liên hệ</h4>
                <p>Địa chỉ: Tòa TBT, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</p>
                <p>Email: truebeautysp@gmail.com</p>
                <p>Hotline: 09097211</p>
                {/* <p>Payment Accepted</p> */}
                {/* <img src="img/payment.png" className="img-fluid" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
