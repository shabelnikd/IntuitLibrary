import React from "react";
import {Container} from "reactstrap";
import LogoFooter from "../../assets/images/logo-footer.png";
import "../../styles/footer.css";


import {Link} from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <div className="footer-links__block">
          <div className="footer-links__block-one">
            <div className="footer-links__text">
              <div className="footer-links">
                <Link className="footer-links__text-a" to="/">г. Бишкек, ул. Анкара (Горького), 1/17</Link>
                <a href="https://intuit.kg/" className="footer-links__text-a">intuit.kg</a>
                <a href="https://itec.kg/" className="footer-links__text-a">itec.kg</a>
                <a href="https://comtehno.kg/" className="footer-links__text-a">comtehno.kg</a>
                <Link className="footer-links__text-a" to="/">(0707) 37 99 57</Link>
              </div>
            </div>
            <div className="footer-links__text">
              <img src={LogoFooter} alt="" />
            </div>
          </div>
          <h2 className="footer-text-head">
          © 2024 НАУЧНО-ИНФОРМАЦИОННАЯ БИБЛИОТЕКА МУИТ
          </h2>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
