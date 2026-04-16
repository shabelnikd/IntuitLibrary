import React from "react";
import home from "../../assets/images/home-img.png";
import aftor from "../../assets/images/aftor.png";
import profile from "../../assets/images/profile-mobile.png";
import burger from "../../assets/images/burger-menu.png";
import close from "../../assets/images/close.png";
import stat from "../../assets/images/static.png";
import "../../styles/styles-mobile/footer-mobile.css";
import {Link} from "react-router-dom";
import {loadDataFromLocalStorage} from "../../api";

const FooterMobile = ({closeMenu}) => {
  const userData = loadDataFromLocalStorage();
  return (
    <div>
      <div className="footer-mob">
        <div className="footer-mob__item-close" onClick={closeMenu}>
          <img src={close} alt="" />
        </div>
        <Link to="/" className="footer-mob__item" onClick={closeMenu}>
          <img src={home} alt="" />
          <p className="footer-mob__text">Главная</p>
        </Link>
        {!userData.accessToken ? (
            <Link to="/login" className="footer-mob__item" onClick={closeMenu}>
              <img src={profile} alt="" />
              <p className="footer-mob__text">Войти</p>
            </Link>
        ) : (
            <Link to="/account" className="footer-mob__item" onClick={closeMenu}>
              <img src={profile} alt="" />
              <p className="footer-mob__text">Профиль</p>
            </Link>
        )}
        <Link to="/avtors" className="footer-mob__item" onClick={closeMenu}>
          <img src={aftor} alt="" />
          <p className="footer-mob__text">Авторы</p>
        </Link>
        <Link to="/static" className="footer-mob__item" onClick={closeMenu}>
          <img src={stat} alt="" />
          <p className="footer-mob__text">Статистика</p>
        </Link>
        <Link to="/shop" className="footer-mob__item" onClick={closeMenu}>
          <img src={burger} alt="" />
          <p className="footer-mob__text">Каталог</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterMobile;
