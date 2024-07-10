/* eslint-disable */
import React from "react";
import "../App.css";
import "bootstrap";

function Feadturs() {
  return (
    <>
      <div className="container-fluid featurs">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-car-side fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>Miễn phí vận chuyển</h5>
                  <p className="mb-0">Miễn phí cho đơn từ 300K</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>Bảo mật</h5>
                  <p className="mb-0">Bảo mật thông tin 100%</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>Đổi trả</h5>
                  <p className="mb-0">Đổi trả nhanh trong 7 ngày</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white" />
                </div>
                <div className="featurs-content text-center">
                  <h5>Hỗ trợ 24/7</h5>
                  <p className="mb-0">Hỗ trợ mọi khung giờ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feadturs;
