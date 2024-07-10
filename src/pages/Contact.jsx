/* eslint-disable */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <div className="container-fluid contact">
        <div className="container">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto" style={{ maxWidth: 700 }}>
                  <h1 className="text-primary">Liên lạc với TrueBeauty</h1>
                  <p className="mb-4">
                  Câu hỏi của bạn rất quan trọng đối với chúng tôi! Xin vui lòng điền thông tin vào mẫu dưới đây để chúng tôi có thể hỗ trợ bạn tốt hơn.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 350 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div> */}
              <div className="col-lg-7">
                <form action="" className="">
                  <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Nhập tên" />
                  <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Nhập emal" />
                  <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Viết nội dung bạn muốn chia sẻ hoặc câu hỏi bạn đang thắc mắc" defaultValue={""} />
                  <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">
                Gửi
                  </button>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                  <div>
                    <h4 className="text-start">Địa chỉ</h4>
                    <p className="mb-2 text-start">Tòa TBT, Tân Chánh Hiệp, Quận 12, Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4" />
                  <div>
                    <h4 className="text-start">Email TrueBeauty</h4>
                    <p className="mb-2 text-start">truebeautysp@gmal.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                  <div>
                    <h4 className="text-start">Hotline</h4>
                    <p className="mb-2 text-start"> 09097211</p>
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

export default Contact;
