import React, {useState} from "react";
import "../styles/authentication.css";
import {Link, useNavigate} from "react-router-dom";
import {resetPost} from "../api";

const DispatchPassword = () => {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormSubmitted(false);

    // Проверка на валидность email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(e.target.value));
  };

  const handleRecoveryButtonClick = (e) => {
    e.preventDefault();

    // Проверка на пустую строку перед проверкой валидности email
    if (!email.trim()) {
      setFormSubmitted(true);
      return;
    }

    // Проверка на валидность email перед отправкой проверочного кода
    if (!isValidEmail) {
      setFormSubmitted(true);
      return;
    }

    // Здесь можно добавить логику отправки проверочного кода на email
    // и обработку успешной отправки
    // Например, использовать API для отправки сообщения
    // и в случае успеха открыть модальное окно с сообщением

    resetPost(email);

    setModalMessage(
        `Сообщение с проверочным кодом было отправлено на ${email}`
    );
    setModalOpen(true);

    setTimeout(() => {
      navigate('/recovery')
    }, 3000)
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
      <div>
        <section className="signup">
          <form action="" className="signup-form" onSubmit="">
            <h2 className="signup-head">Восстановление пароля</h2>
            <input
                type="email"
                className={`signup-input ${
                    !isValidEmail && formSubmitted ? "invalid" : ""
                }`}
                placeholder="Введите свой e-mail"
                onChange={handleEmailChange}
                value={email}
            />
            {!isValidEmail && formSubmitted && (
                <p className="error-text">Введите корректный email</p>
            )}
            <br />
            <button className="singup-btn" onClick={handleRecoveryButtonClick}>
              Восстанавить
            </button>
            <p className="signup-text">Или</p>
            <Link className="singup-btn" to="/login">
              Войти
            </Link>
          </form>
          {/* Модальное окно */}
        </section>
        {modalOpen && (
            <div className="modal-overlay">
              <div className="modal2">
                <p> <span>{modalMessage}</span></p>
              </div>
            </div>
        )}
      </div>
  );
};

export default DispatchPassword;
