import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../styles/authentication.css";
import ClosePassword from "../assets/images/closed__password.png";
import OpenPassword from "../assets/images/open__password.png";
import {resetCompletePost} from "../api";

const PasswordRecovery = () => {
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getPasswordImage = () => {
    return showPassword ? OpenPassword : ClosePassword;
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getConfirmPasswordImage = () => {
    return showConfirmPassword ? OpenPassword : ClosePassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Добавьте вашу логику восстановления пароля
    // ...
    resetCompletePost(verify, password);
    // Очистите значения полей после успешного восстановления пароля
    // navigate('/login')
    setModalMessage(
      `Вы успешно обновили свой пароль`
    );
    setModalOpen(true);
  };

  return (
    <div>
      <section className="signup">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2 className="signup-head">Восстановление пароля</h2>
          <input value={verify}
                 onChange={(e) => setVerify(e.target.value)}
                 type="number"
                 className="signup-input"
                 placeholder="Введите код из почты"/>
          <div className="input-block">
            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                placeholder="Введите новый пароль"
            />
            <button type="button" onClick={togglePasswordVisibility}>
              <img src={getPasswordImage()} alt="Toggle Password Visibility"/>
            </button>
          </div>
          <div className="input-block">
            <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="signup-input"
                placeholder="Повторите новый пароль"
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility}>
              <img
                  src={getConfirmPasswordImage()}
                  alt="Toggle Confirm Password Visibility"
              />
            </button>z
          </div>
          <button type="submit" className="singup-btn">
            Сменить пароль
          </button>
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
    </div>
  );
};

export default PasswordRecovery;
