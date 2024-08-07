/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "swiper/css";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import Footer from "../components/Footer";
import Product from "../components/Products";

function Detail({ name, image, price, discount, slug, content }) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [gallery, setGallery] = useState([]);
  const [links, setLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(id);
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "material-icons",
          tagName: "i",
          text: "warning",
        },
      },
      {
        type: "error",
        background: "indianred",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "success",
        background: "green",
        color: "white",
        duration: 2000,
        dismissible: true,
      },
      {
        type: "info",
        background: "#24b3f0",
        color: "white",
        duration: 1500,
        dismissible: false,
        icon: '<i class="bi bi-bag-check"></i>',
      },
    ],
  });
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "products/" + id)
      .then((res) => res.json())
      .then((res) => {
        if (!res.product) {
          window.location.replace("/not-found");
        }
        setProduct(res.product);
        setGallery(res.medias);
        setLinks(res.links);
      });
  }, [id]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const getDescription = () => {
    const fullDescription = product?.content || "";
    const maxLength = 200;
    if (fullDescription.length <= maxLength) {
      return fullDescription;
    }
    return fullDescription.substring(0, maxLength) + "...";
  };

  const addToCart = (id) => {
    var cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      cart.forEach((el) => {
        if (el[0] == id) {
          el[1] = el[1] + 1;
        } else {
          cart.push([id, 1]);
        }
      });
    } else {
      cart = [[id, 1]];
    }
    notyf.open({
      type: "success",
      message: "Đã thêm vào giỏ hàng",
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const formattedPrice = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(product.price);

  return (
    <>
      {product && (
        <>
          <Header />
          <div className="container-fluid">
            <div className="container py-5">
              <div className="row g-4 mb-5">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-lg-4">
                      <div className="border rounded">
                        <Carousel showStatus={false} showArrows={true}>
                          {gallery &&
                            gallery.map((item, index) => (
                              <div key={index}>
                                <img src={process.env.REACT_APP_IMG_URL + "/" + item} alt={`gallery-${item}`} />
                              </div>
                            ))}
                        </Carousel>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row g-4">
                        <div className="col-12 text-start">
                          <h4 className="fw-bold mb-3">{product?.name}</h4>
                          <p className="mb-3">Danh mục: {product?.categories?.name}</p>
                          <p className="mb-3 fw-bold fs-6">Thương hiệu: {product?.brands?.name} </p>
                          <h5 className="fw-bold mb-3">Gía: {formattedPrice}</h5>
                          {/* <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div> */}
                          <p className="mb-4">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                          {/* <p className="mb-4">Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p> */}
                          <div className="row">
                            {" "}
                            <div className="col-lg-6">
                              <div className="input-group quantity mb-5 " style={{ width: 100 }}>
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
                            </div>
                            <div className="col-lg">
                              <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                <i className="fa fa-cart-plus me-2 text-primary" /> Thêm vào giỏ
                              </a>
                            </div>
                            <div className="col-lg">
                              <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                <i className="fa fa-shopping-bag me-2 text-primary" /> Mua ngay
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <nav>
                        <div className="nav nav-tabs mb-3">
                          <button
                            className="nav-link active border-white border-bottom-0"
                            type="button"
                            role="tab"
                            id="nav-about-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-about"
                            aria-controls="nav-about"
                            aria-selected="true"
                          >
                            Mô tả
                          </button>
                          <button
                            className="nav-link border-white border-bottom-0"
                            type="button"
                            role="tab"
                            id="nav-mission-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-mission"
                            aria-controls="nav-mission"
                            aria-selected="false"
                          >
                            Đánh giá
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content mb-5">
                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                          <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                          <p>
                            Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish,
                            electric ray sweeper.
                          </p>
                          <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          {/* <div className="px-2">
                            <div className="row g-4">
                              <div className="col-6">
                                <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Weight</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">1 kg</p>
                                  </div>
                                </div>
                                <div className="row text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Country of Origin</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">Agro Farm</p>
                                  </div>
                                </div>
                                <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Quality</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">Organic</p>
                                  </div>
                                </div>
                                <div className="row text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Сheck</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">Healthy</p>
                                  </div>
                                </div>
                                <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Min Weight</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">250 Kg</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                          <div className="d-flex">
                            <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt="" />
                            <div className="">
                              <p className="mb-2" style={{ fontSize: 14 }}>
                                April 12, 2024
                              </p>
                              <div className="d-flex justify-content-between">
                                <h5>Jason Smith</h5>
                                <div className="d-flex mb-3">
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                            </div>
                          </div>
                          <div className="d-flex">
                            <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: 100, height: 100 }} alt="" />
                            <div className="">
                              <p className="mb-2" style={{ fontSize: 14 }}>
                                April 12, 2024
                              </p>
                              <div className="d-flex justify-content-between">
                                <h5>Sam Peters</h5>
                                <div className="d-flex mb-3">
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star text-secondary" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p className="text-dark">
                                The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                          <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. 3</p>
                          <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit</p>
                        </div>
                      </div>
                    </div>
                    <form action="#">
                      <h4 className="mb-5 fw-bold">Viết đánh giá</h4>
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="border-bottom rounded">
                            <input type="text" className="form-control border-0 me-4" placeholder="Tên*" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="border-bottom rounded">
                            <input type="email" className="form-control border-0" placeholder="Email*" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="border-bottom rounded my-4">
                            <textarea name="" id="" className="form-control border-0" cols={30} rows={8} placeholder="Đánh giá trải nghiệm sản phẩm*" spellCheck="false" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-3">Đánh giá:</p>
                              <div className="d-flex align-items-center" style={{ fontSize: 12 }}>
                                <i className="fa fa-star text-muted" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <a href="#" className="btn border border-secondary text-primary rounded-pill px-4">
                              {" "}
                              Gửi đánh giá
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="row mt-3">
                <div className="col-md-9 text-center">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    loop={true}
                    className="mySwiper"
                  >
                    {links.length > 0 &&
                      links.map((product, index) => (
                        <SwiperSlide key={index}>
                          <Product name={product.name} image={product.image} price={product.price} slug={product.slug} discount={product.discount} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div> */}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Detail;
