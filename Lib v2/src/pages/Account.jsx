import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import FavoritePage from "../components/UI/favorites/Favorites";
import { Avatar } from "@mui/material";
import "../styles/account.css";
import InfoAccount from "./InfoAccount";
import { userProfile } from "../api";
import { Link, useNavigate } from "react-router-dom";
import UserBooksPage from "../components/UI/favorites/UserBooks";
import AdminPanel from "../components/AdminPanel/AdminPanel";

const Account = () => {
  const [currentComponent, setCurrentComponent] = useState("component1");

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      userProfile(token)
          .then((data) => setUserData(data))
          .catch((err) => {
            navigate("/login");
          });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  console.log(userData);
  // useEffect(() => {
  //   if (!userData.accessToken) {
  //     navigate("/login");
  //   } else {
  //     setUser(userData.userName)
  //   }
  // }, [userData]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setTimeout(() => window.location.reload(), 1000);
  };

  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
      <div style={{ background: "#F7F5F5" }}>
        <section className="account">
          <Container>
            <div className="account-head">
              <div className="account-head__text">
                <h1 className="account-head__text-h1">Личный кабинет</h1>
              </div>
              <div className="acoount-head__exit">
                <p className="account-head__exit__text">
                  {userData.email}
                </p>
                <button
                    onClick={handleLogout}
                    className="account-head__exit__btn"
                >
                  Выйти
                </button>
              </div>
            </div>
            <div className="account-title">
              <div className="acount-title__side__nav">
                <div className="account-title__profile">
                  <Avatar
                      sx={{ bgcolor: "#292283" }}
                      // alt={userName.split(' ')[0][0]}
                      src="/broken-image.jpg"
                      className="avatart__account"
                  />
                  <div className="account-title__profile__head">
                  <span style={{ whiteSpace: "nowrap" }}>
                    Здравствуйте - {userData.full_name}
                  </span>
                  </div>
                </div>
                <div className="account-title__side__nav__box">
                  <button
                      className={`account-title__side__nav__btn ${
                          currentComponent === "component1" ? "active" : ""
                      }`}
                      onClick={() => handleButtonClick("component1")}
                  >
                    Информация
                  </button>
                  {userData.email === "utbegaliev@mail.ru" && (
                      <div className="account-title__side__nav__btn">
                        <Link to="/Static/puple" className="statistics-link">
                          Статистика студентов
                        </Link>
                      </div>
                  )}
                </div>
              </div>
              <InfoAccount userData={userData} />
            </div>
            {userData.user_type === "teacher" && (
                <>
                  <UserBooksPage userData={userData} />
                  <h1 className="info-h1">ДОБАВЛЕНИЕ КНИГ</h1>
                  <AdminPanel />
                </>
            )}
            {userData.user_type === "student" && (
                <FavoritePage userData={userData} />
            )}
          </Container>
        </section>
      </div>
  );
};

export default Account;
