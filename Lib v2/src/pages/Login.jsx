import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import {Link, useNavigate} from "react-router-dom";
import "../styles/authentication.css";
import ClosePassword from "../assets/images/closed__password.png";
import OpenPassword from "../assets/images/open__password.png";
import loginPost from "../api";

const Login = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordImage = () => {
    return showPassword ? OpenPassword : ClosePassword;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPost(email, password, setModalOpen, setModalMessage, navigate);
  };

  return (
    <div>
      <Helmet title="Login">
        <section className="signup">
          <form action="" className="signup-form">
            <h2 className="signup-head">Вход</h2>
            <input
              type="email"
              className="signup-input"
              placeholder="Введите свой e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-block">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                placeholder="Введите свой пароль"
              />
              <button type="button" onClick={togglePasswordVisibility}>
                <img
                  src={getPasswordImage()}
                  alt="Toggle Password Visibility"
                />
              </button>
            </div>
            <Link className="singup-links" to="/dispatch">
              Забыли пароль?
            </Link>
            <Link className="singup-btn" to="/login" onClick={handleSubmit}>
              Войти
            </Link>
            <p className="signup-text">Или</p>
            <Link className="singup-btn" to="/register">
              Регистрация
            </Link>
          </form>
          {modalOpen && (
            <div className="modal-overlay">
              <div className="modal2">
                <p>
                  {" "}
                  <span>{modalMessage}</span>
                </p>
              </div>
            </div>
          )}
        </section>
      </Helmet>
    </div>
  );
};

export default Login;
