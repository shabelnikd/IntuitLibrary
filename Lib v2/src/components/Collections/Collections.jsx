import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import ProductCard from "../UI/product-card/ProductCard.jsx";
import "../../styles/recollections.css";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Mousewheel, Navigation, Pagination} from "swiper/modules";

const Collections = () => {
  const [productsSql, setProductsSql] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("Sushi");
  const exchangeRate = 90;
  useEffect(() => {
    axios
      .get("https://api.moresushikg.shop/view_products")
      .then((response) => {
        console.log(response.data);
        setProductsSql(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    console.log(setProductsSql);
  }, []);
  useEffect(() => {
    if (category === "ALL") {
      setFilteredProducts(productsSql instanceof Array ? productsSql : []);
    } else {
      const filtered =
        productsSql instanceof Array
          ? productsSql.filter((product) => product.category === category)
          : [];
      setFilteredProducts(filtered);
    }
  }, [category, productsSql]);

  const settings = {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: true,
    mousewheel: true,
    pagination: {
      clickable: true,
    },
    modules: [FreeMode, Pagination, Mousewheel, Navigation],
  };

  return (
    <div>
      <Row id="food">
        <Col lg="12" className="text-center">
          <h2 className="menu__desc">Коллекции</h2>
        </Col>
        <div className="food__block">
          <Col lg="12">
            <div className="food__category d-flex align-items-center gap-3">
              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "Sushi" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("Sushi")}
              >
                Девочки
              </button>

              <button
                className={`d-flex align-items-center gap-2 ${
                  category === "Roll" ? "foodBtnActive" : ""
                } `}
                onClick={() => setCategory("Roll")}
              >
                Мальчики
              </button>
            </div>
          </Col>
          <div>
            {filteredProducts.length !== 0 && (
              <Swiper {...settings}>
                {filteredProducts.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="mySwiper"
                    style={{ width: "275px" }}
                  >
                    <div>
                      <ProductCard
                        product={product}
                        exchangeRate={exchangeRate}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          {/* <div className="product-box">
                  {filteredProducts?.map((product) => (
                    <ProductCart key={product.id} product={product} />
                  ))}
              </div> */}
        </div>
      </Row>
    </div>
  );
};

export default Collections;
