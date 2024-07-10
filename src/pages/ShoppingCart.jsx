/* eslint-disable */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ShoppingCart() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Gía</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng</th>
                  <th scope="col">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt="" />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Big Banana</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: 100 }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src="img/vegetable-item-5.jpg" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt="" />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Potatoes</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: 100 }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img src="img/vegetable-item-2.jpg" className="img-fluid me-5 rounded-circle" style={{ width: 80, height: 80 }} alt="" />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">Awesome Brocoli</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <div className="input-group quantity mt-4" style={{ width: 100 }}>
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">2.99 $</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="fa fa-times text-danger" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="mt-5">
            <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Nhập mã giảm giá" />
            <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">
              Áp mã giảm giá
            </button>
          </div> */}
          <div className="row g-4 justify-content-end">
            <div className="col-8" />
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    <span className="fw-normal">Tổng giỏ hàng</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Tổng:</h5>
                    <p className="mb-0">$96.00</p>
                  </div>
                  {/* <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Vận chuyển</h5>
                    <div className="">
                      <p className="mb-0">Phí cố định: $3.00</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Vận chuyển từ quận 12</p> */}
                </div>
                {/* <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Tất cả </h5>
                  <p className="mb-0 pe-4">$99.00</p>
                </div> */}
                <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">
                  <Link to="/thanh-toan">Thanh toán</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShoppingCart;
