import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../styles/maincard.css'

const MainCard = () => {
  return (
    <div>
        <Container>
          <div className="main-card">
            <div className="main-card__block__one">
              <div className="block__one-text">
                <div className="block__one-link">
                  <Link to="/" className="block__one-link-style">
                    Девочки
                  </Link>
                  <Link to="" className="block__one-link-style">
                    Мальчики
                  </Link>
                </div>
                <p to="" className="block__one-link-text">Конверты</p>
              </div>
            </div>
            <div className="main-card__block__two">
              <div className="block__two-text">
                <div className="block__two-link">
                  <Link to="/" className="block__two-link-style">
                    Девочки
                  </Link>
                  <Link to="" className="block__two-link-style">
                    Мальчики
                  </Link>
                </div>
                <p to="" className="block__two-link-text">
                  Боди
                </p>
              </div>
            </div>
          </div>
        </Container>
    </div>
  );
};

export default MainCard;
