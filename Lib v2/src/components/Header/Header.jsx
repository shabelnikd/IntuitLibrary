import React, {useState} from "react";
import logo from "../../assets/images/logo.png";
import logout from "../../assets/images/logout.png";
import Burger from "../../assets/images/burger-menu.png";
import {Link, useLocation} from "react-router-dom";
import SearchPage from "../Search/SearchPage";
import "../../styles/header.css";
import {Container} from "react-bootstrap";
import FooterMobile from "../Footer-mobile/FooterMobile";
import {loadDataFromLocalStorage} from "../../api";

const Header = ({product}) => {
  const location = useLocation();
  const [isFooterMobileActive, setIsFooterMobileActive] = useState(false);
  const userData = loadDataFromLocalStorage();
  const handleBurgerMenuClick = () => {
    setIsFooterMobileActive(!isFooterMobileActive); // Изменить состояние активности FooterMobile
  };
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" className=""/>
            </div>
          </Link>
          {/* ======= menu ======= */}
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-4">
              <Link
                  to="/"
                  className={location.pathname === "/" ? "active__menu" : ""}
              >
                Главная
              </Link>
              <Link
                  to="/Shop"
                  state={{kek: "kek"}}
                  className={location.pathname === "/Shop" ? "active__menu" : ""}
              >
                Книги
              </Link>
              <Link
                  to="/avtors"
                  className={
                    location.pathname === "/avtors" ? "active__menu" : ""
                  }
              >
                Авторы
              </Link>
              <Link
                  to="/Static"
                  className={
                    location.pathname === "/avtors" ? "active__menu" : ""
                  }
              >
                Статистика
              </Link>
            </div>
          </div>
          <div className="header-search">
            <SearchPage product={product}/>
          </div>

          <div className="nav__right align-items-center gap-4">
            {!userData.accessToken ? (

                <Link to="/login" className="header__head-link">
                  <img src={logout} alt=""/>
                  Войти
                </Link>

              ) : (
              <Link to="/account" style={{color: '#292283'}} className="btn-currence__style header__head-link">
            Профиль
          </Link>
          )}
          </div>

          <img src={Burger} className="burger-menu" onClick={handleBurgerMenuClick}/>
          <div className="footer-mobile">
            {isFooterMobileActive && <FooterMobile closeMenu={handleBurgerMenuClick}/>}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
