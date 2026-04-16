import React, {useEffect, useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import {Link, useNavigate} from "react-router-dom";
import "../styles/authentication.css";
import {Autocomplete, Checkbox, TextField} from "@mui/material";
import {baseApi, registerPost} from "../api";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    name: '',
    password: '',
    confirm_password: '',
    agreementChecked: false
  })

  const getGroups = `${baseApi}/accounts/groups/`
  const [groups, setGroups] = useState([])

  useEffect(() => {
    axios.get(getGroups).then((data) => setGroups(data.data))
  }, [getGroups]);


  const [role, setRole] = useState('')
  const [inputRole, setInputRole] = useState('')
  const [selectGroup, setSelectGroup] = useState('')
  const [inputGroup, setInputGroup] = useState('')
  const [selectDirection, setSelectDirection] = useState('')
  const [inputDirection, setInputDirection] = useState('')
  const [filteredGroups, setFilteredGroups] = useState([])


  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [agreementError, setAgreementError] = useState("");
  const [russianTextError, setRussianTextError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const handleChangeDirection = (e) => {
    setSelectDirection(e)
    const prev = groups
    setFilteredGroups(groups.filter((grp) => grp.direction === e))
    setGroups(prev)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirm_password) {
      setConfirmPasswordError("Пароли не совпадают");
      return;
    }
    registerPost(userData.email, userData.password, userData.name, userData.phone, role.val, selectGroup.val, setModalMessage, setModalOpen, navigate)
  };
  return (
      <div>
        <Helmet title="Login">
          <section className="signup">
            <form action="" className="signup-form">
              <h2 className="signup-head">Регистрация</h2>
              <input
                  type="text"
                  className="signup-input"
                  placeholder="Введите полное имя"
                  value={userData.name}
                  name={'name'}
                  onChange={handleChange}
                  required
              />
              <Autocomplete
                  // className="signup-input"
                  value={role.label}
                  onChange={(e, newValue) => {
                    setRole(newValue)
                  }}

                  inputValue={inputRole}
                  onInputChange={(e, newInValue) => {
                    setInputRole(newInValue);
                  }}
                  disablePortal
                  id="combo-box-demo"
                  options={[{label: "Студент", val: "student"}, {label: "Преподаватель", val: "teacher"}]}
                  sx={{width: "100%", marginBottom: "10px", marginTop: "10px"}}
                  renderInput={(params) => <TextField className="" {...params} label="Тип аккаунта"/>}
              />
              {role.val === "student" && (
                  <Autocomplete
                      // className="signup-input"
                      value={selectDirection}
                      onChange={(e, newValue) => {
                        handleChangeDirection(newValue)
                      }}

                      inputValue={inputDirection}
                      onInputChange={(e, newInValue) => {
                        setInputDirection(newInValue);
                      }}
                      disablePortal
                      id="combo-box-demo"
                      options={["МУИТ", "КОМТЕХНО", "КИТЭ"]}
                      sx={{width: "100%", marginBottom: "10px", marginTop: "10px"}}
                      renderInput={(params) => <TextField className="" {...params} label="Выберите учереждение"/>}
                  />

              )}
              {selectDirection && (
                  <Autocomplete
                      // className="signup-input"
                      value={selectGroup.label}
                      onChange={(e, newValue) => {
                        if (newValue) {
                           setSelectGroup(newValue) // setSelectGroup(newValue.val);
                        }
                      }}

                      inputValue={inputGroup}
                      onInputChange={(e, newInValue) => {
                        setInputGroup(newInValue);
                      }}
                      disablePortal
                      id="combo-box-demo"
                      options={filteredGroups.map((r) => ({label: r.name, val: r.id}))}
                      sx={{width: "100%", marginBottom: "10px", marginTop: "10px"}}
                      renderInput={(params) => <TextField className="" {...params} label="Выберите группу"/>}
                  />
              )}


              <p>{russianTextError}</p>
              <input
                  type="number"
                  id="phone"
                  className="signup-input"
                  placeholder="+996 ( ) ___ - ___"
                  value={userData.phone}
                  name={'phone'}
                  onChange={handleChange}
              />
              <p></p>
              <input
                  type="email"
                  className="signup-input"
                  placeholder="Введите свой e-mail"
                  required
                  value={userData.email}
                  name={'email'}
                  onChange={handleChange}
              />
              <p>{emailError}</p>
              <input
                  type="password"
                  className="signup-input"
                  placeholder="Придумайте пароль"
                  value={userData.password}
                  name={'password'}
                  onChange={handleChange}
                  minLength="8"
                  required
              />
              <p>{passwordError}</p>
              <input
                  type="password"
                  className="signup-input"
                  placeholder="Повторите пароль"
                  name={'confirm_password'}
                  value={userData.confirm_password}
                  onChange={handleChange}
                  required
              />
              <p>{confirmPasswordError}</p>
              <label htmlFor="check" className="signup-label">
                <Checkbox
                    // {...label}
                    checked={userData.agreementChecked}
                    onChange={handleChange}
                    name={'agreementChecked'}
                    id="check"
                    sx={{
                      color: "#292283",
                      "&.Mui-checked": {
                        color: "#292283",
                      },
                    }}
                />
                Даю согласие на обработку данных
              </label>
              <p>{agreementError}</p>
              <button
                  onClick={handleSubmit}
                  className="singup-btn"
              >
                Регистрация
              </button>
              <p className="signup-text">Или</p>
              <Link className="singup-btn" to="/login">
                Войти
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
