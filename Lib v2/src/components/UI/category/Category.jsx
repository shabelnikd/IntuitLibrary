import React from "react";

import {Col, Container, Row} from "reactstrap";

import categoryImg01 from "../../../assets/images/icon__sushi.png";
import categoryImg02 from "../../../assets/images/icon__roll.png";
import categoryImg03 from "../../../assets/images/icon__set.png";
import categoryImg04 from "../../../assets/images/icon__pizza.png";


import "../../../styles/category.css";

const categoryData = [
  {
    display: "Суши",
    imgUrl: categoryImg01,
  },
  {
    display: "Роллы",
    imgUrl: categoryImg02,
  },

  {
    display: "Сеты",
    imgUrl: categoryImg03,
  },

  {
    display: "Пицца",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
