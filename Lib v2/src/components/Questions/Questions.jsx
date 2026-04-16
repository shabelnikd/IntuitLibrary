import React from "react";
import {Container} from "reactstrap";
import "../../styles/questions.css";
import CardPhoto from "../../assets/images/photo.png";
import {Link} from "react-router-dom";

const Questions = () => {
  return (
    <div className="questions">
      <Container>
        <div className="questions-block">
          <div className="questions-card">
            <img src={CardPhoto} alt="" />
            <div className="questions-card__tex">
              <p className="questions-genre">Классика</p>
              <h1 className="questions-head">Плаха</h1>
              <p className="questions-desc">
                Самый сильный, глубокий, горький и драматичный роман Чингиза
                Айтматова, впервые опубликованный в 1986 году и ставший одним из
                главных литературных событий конца ХХ века в нашей стране...
              </p>
              <Link to="/shop" className="questions-btn">
                Читать
              </Link>
            </div>
          </div>
          <div className="questions-card-two">
            <div className="questions-card-two__img-one">
              <p className="questions-card-two__img-text">
                Возьми книгу с собой<br/> в путешествие
              </p>
            </div>
            <div className="questions-card-two__block">
              <div className="questions-card-two__img-two">
                <p className="questions-card-two__img-text">
                  Лучшие книги Ч. Айтматова
                </p>
              </div>
              <div className="questions-card-two__img-two">
                <p className="questions-card-two__img-text">
                  Лучшие книги Ч. Айтматова
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Questions;
