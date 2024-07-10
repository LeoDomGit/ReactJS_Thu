/* eslint-disable */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container py-5">
          <h1 className="mb-4">Chi tiết đơn hàng</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Tên<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Họ<sup>*</sup>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label for="form-label my-3">Số điện thoại</label>
                  <input type="text" className="form-control" placeholder="Số điện thoại"/>
                </div>
                <div className="form-item">
                  <label for="tinhSelect">Chọn tỉnh/thành phố*</label>
                  <select className="form-control" id="tinhSelect" placeholder="Tỉnh/thành phố"></select>
                </div>
                <div className="form-item">
                  <label for="huyenSelect">Chọn quận/huyện*</label>
                  <select className="form-control" id="huyenSelect" placeholder="Quận/huyện"></select>
                </div>
                <div className="form-item">
                  <label for="xaSelect">Chọn phường/xã*</label>
                  <select className="form-control" id="xaSelect" placeholder="Phường/xã"></select>
                </div>
                <div className="form-check my-3">
                  <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" defaultValue="Accounts" />
                  <label className="form-check-label" htmlFor="Account-1">
                    Lưu địa chỉ
                  </label>
                </div>
                <hr />
                <div className="form-item">
                  <textarea name="text" className="form-control" spellCheck="false" cols={30} rows={11} placeholder="Ghi chú đơn hàng" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Gía</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-2.jpg" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Awesome Brocoli</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-5.jpg" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Potatoes</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div className="d-flex align-items-center mt-2">
                            <img src="img/vegetable-item-3.png" className="img-fluid rounded-circle" style={{ width: 90, height: 90 }} alt="" />
                          </div>
                        </th>
                        <td className="py-5">Big Banana</td>
                        <td className="py-5">$69.00</td>
                        <td className="py-5">2</td>
                        <td className="py-5">$138.00</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5" />
                        <td className="py-5" />
                        <td className="py-5">
                          <p className="mb-0 text-dark py-3">Tạm tính</p>
                        </td>
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$414.00</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark py-4">Vận chuyển</p>
                        </td>
                        <td colSpan={3} className="py-5">
                          <div className="form-check text-start">
                            <input type="radio" className="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" defaultValue="Shipping" />
                            <label className="form-check-label" htmlFor="Shipping-1">
                              Miễn phí vận chuyển
                            </label>
                          </div>
                          <div className="form-check text-start">
                            <input type="radio" className="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" defaultValue="Shipping" />
                            <label className="form-check-label" htmlFor="Shipping-2">
                              Vận chuyển hỏa tốc: $15.00
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-5">
                          <p className="mb-0 text-dark text-uppercase py-3">TỔNG</p>
                        </td>
                        <td className="py-5" />
                        <td className="py-5" />
                        <td className="py-5">
                          <div className="py-3 border-bottom border-top">
                            <p className="mb-0 text-dark">$135.00</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input type="radio" className="form-check-input bg-primary border-0" id="Payments-1" name="Payment" defaultValue="Payments" />
                      <label className="form-check-label" htmlFor="Payments-1">
                        Thanh toán ngân hàng/ATM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input type="radio" className="form-check-input bg-primary border-0" id="Delivery-1" name="Payment" defaultValue="Delivery" />
                      <label className="form-check-label" htmlFor="Delivery-1">
                        Tiền mặt
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button type="button" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
