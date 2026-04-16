import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductCard from "../UI/product-card/ProductCard";
import {Col, Container} from "react-bootstrap";

import "../../styles/product-details.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import {baseApi} from "../../api";

const Recommendations = () => {
  const [productsSql, setProductsSql] = useState([]);
  const exchangeRate = 90;


  useEffect(() => {
    axios.get(`${baseApi}/books/random/`)
      .then((response) => {
        console.log(response.data);
        setProductsSql(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    console.log(setProductsSql);
  }, []);

  return (
    <div>
      <div className="food__block">
        <Container>
          <Col lg="12" className="book__block">
            <h2 className="menu__desc">Популярные</h2>
            <Link to="/shop" className="menu__desc-category">
              Выбрать категорию
            </Link>
          </Col>
        </Container>
        <div className="popylar__card">
          {productsSql.slice(0, 5).map((product, index) => (
            <ProductCard product={product} exchangeRate={exchangeRate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
