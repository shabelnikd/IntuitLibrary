import * as React from "react";
import "../styles/info-account.css";
import PersonIcon from "@mui/icons-material/Person";

const InfoAccount = ({userData}) => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userDataLocal.accessToken) {
  //     navigate("/account");
  //   }
  // }, [userDataLocal]);
  //
  // const [userData, setUserData] = useState({
  //   userNameF: userDataLocal.userName ? userDataLocal.userName.split(" ")[0] : "",
  //   userNameL: userDataLocal.userName ? userDataLocal.userName.split(" ")[1] : "",
  //   userPhone: userDataLocal.userPhone || ""
  // })
  //
  //
  // const handleChange = (e) => {
  //   setUserData({...userData, [e.target.name]: e.target.value});
  // };
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //
  //   const userName = `${userData.userNameF} ${userData.userNameL}`;
  //   if (userDataLocal.accessToken) {
  //     putProfile(userName, userData.userPhone, userDataLocal.accessToken);
  //   } else {
  //     console.error('No Access Token')
  //   }
  //
  // }

  return (
      <div>
        <section className="info">
          <h1 className="info-h1">
            <PersonIcon/>
            ИНФОРМАЦИЯ
          </h1>
          <div className="info-block">
            <h2 className="info-block__head">Личные данные</h2>
            <div className={userData.user_type === 'teacher' ? "info-block__name_t" : "info-block__name"}>
              <div className="info-block-name__box">
                <label className="info-block__name-label" htmlFor="">
                  Полное имя
                </label>
                <input className="info-block__input" type="text" name='userNameL' value={userData.full_name} disabled/>
              </div>

              {userData.user_type !== 'teacher' ? (
                  <div className="info-block-name__box">
                    <label className="info-block__name-label" htmlFor="">
                      Тип аккаунта
                    </label>
                    <input className="info-block__input" type="text" name='userNameL' value={userData.user_type === 'teacher' ? "Преподаватель" : "Студент"} disabled/>
                  </div>
              ) : (
                  <div className="info-block-name__box" style={{marginLeft: "20px"}}>
                    <label className="info-block__name-label" htmlFor="">
                      Тип аккаунта
                    </label>
                    <input className="info-block__input" type="text" name='userNameL'
                           value={userData.user_type === 'teacher' ? "Преподаватель" : "Студент"} disabled/>
                  </div>
              )}


              {userData.user_type !== 'teacher' ? (
                  <div className="">
                    <label className="info-block__name-label" htmlFor="">
                      Ваш курс
                    </label>
                    <input className="info-block__input" type="text" value={userData.course + ' курс'} disabled/>
                  </div>
              ) : (
                  <></>
              )}

            </div>
            <div className="info-block__contact">
              <div className="info-block__contact__box">
                <label className="info-block__name-label" htmlFor="">
                  Адрес электронной почты
                </label>
                <input
                    className="info-block__input"
                    type="email"
                    value={userData.email}
                    disabled
                />
              </div>
              {userData.user_type === 'teacher' ? (
                  <></>
              ) : (
                  <>
                    <div className="info-block-name__box">
                      <label className="info-block__name-label" htmlFor="">
                        Группа
                      </label>
                      <input className="info-block__input" type="text" name='userNameL' value={userData.group}
                             disabled/>
                    </div>
                    <div className="info-block-name__box" style={{paddingLeft: '20px'}}>
                      <label className="info-block__name-label" htmlFor="">
                        Учереждение
                      </label>
                      <input className="info-block__input" type="text" name='userNameL' value={userData.direction}
                             disabled/>
                    </div>
                  </>
              )}

            </div>
            <div className="info-block__contact__box">
              <label className="info-block__name-label" htmlFor="">
                Телефон:
              </label>
              <input
                  className="info-block__input"
                  type="phone"
                  name='userPhone'
                  value={`${userData.phone_number}`}
                  disabled
              />
            </div>
          </div>
          {/*<div className="info-block__btn">*/}
          {/*  <button onClick={handleSubmit} className="info-block__button">Сохранить</button>*/}
          {/*</div>*/}
        </section>
      </div>
  );
};

export default InfoAccount;
