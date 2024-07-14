/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            {/* <Link to="/" className="navbar-brand d-block d-xl-none"></Link> */}
            <a href="/" className="navbar-brand">
              <h1 className="text-primary display-6">True Beauty</h1>
            </a>
            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars text-primary" />
            </button>
            <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link">
                  Trang chủ
                </Link>

                <Link to="/cua-hang" className="nav-item nav-link">
                  Cửa hàng
                </Link>

                <Link to="/gioi-thieu" className="nav-item nav-link">
                  Giới thiệu
                </Link>

                <Link to="/tin-tuc" className="nav-item nav-link">
                  Blog
                </Link>

                <Link to="/lien-he" className="nav-item nav-link">
                  Liên hệ
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <i className="fas fa-search text-primary" />
                </button>
                <Link to="/gio-hang" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x" />
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                  >
                    3
                  </span>
                </Link>
                <Link to="/tai-khoan" className="my-auto">
                  <i className="fas fa-user fa-2x" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
