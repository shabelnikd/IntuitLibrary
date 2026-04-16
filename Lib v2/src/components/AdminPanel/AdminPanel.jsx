import React, {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./adminpanel.css";
import {Container} from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {baseApi, loadDataFromLocalStorage} from "../../api";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Backdrop} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const AddBook = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [backdropState, setBackdropState] = useState(false)
  // Состояние для выбранного института

  const [bookData, setBookData] = useState({
    title: "",
    genre: "",
    description: "",
    author: "",
    page: "",
    year: ""
  })

  const [selectedInstitute, setSelectedInstitute] = useState("");
  const [poster, setPoster] = useState(null)
  const [pdf, setPdf] = useState(null)

  const handleChangeBook = (e) => {
    setBookData({...bookData, [e.target.name]: e.target.value});
  };


  const handleChange = (event) => {
    setAge(event.target.value);
    setSelectedInstitute(""); // Сбросить выбранный институт при изменении первого Select
  };

  const handleInstituteChange = (event) => {
    setSelectedInstitute(event.target.value); // Обновить выбранный институт
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setBackdropState(true)

    const userToken = loadDataFromLocalStorage()
    if (!userToken.accessToken){
      navigate('/login')
    }

    const productData = new FormData()

    productData.append('description', bookData.description)
    productData.append('title', bookData.title)
    productData.append('genre', bookData.genre)
    productData.append('pages', bookData.page)
    productData.append('year', bookData.year)
    productData.append('author', bookData.author)
    productData.append('pdf', pdf)
    productData.append('image1', poster)
    if (selectedInstitute) {
      productData.append('direction', selectedInstitute)
    } else {
      productData.append('direction', "КОЛЛЕДЖ")
    }

    const sendBookPost = `${baseApi}/books/create_book/`

    axios.post(sendBookPost, productData, {
      headers: {
        Authorization: `Bearer ${userToken.accessToken}`,
      }})
        .then((response) => {
          setBackdropState(false)
          setModalMessage('Книга отправлена!')
          setModalOpen(true);
          setTimeout(() => {
            setModalOpen(false)
            window.location.reload()
          }, 2500)

        })
        .catch((error) => {
          setBackdropState(false)
          setModalMessage("Произошла ошибка, проверьте правильность введенных данных и повторите попытку.")
          setModalOpen(true)

          setTimeout(() => {
            setModalOpen(false)
          }, 5000)
        })
  }




  return (
    <div>
      <Container>
        <div className="admin-panel__form">
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Выберите какое учреждение{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <FormControl>
              <InputLabel id="demo-simple-select-autowidth-label">
                Учереждение
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                className="admin-select"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Учереждение"
              >
                <MenuItem value={10}>МУИТ</MenuItem>
                <MenuItem value={21}>КОМТЕХНО</MenuItem>
                <MenuItem value={22}>КИТЭ</MenuItem>

              </Select>
            </FormControl>
          </div>
          {age === 10 && ( // Показать второй Select только если выбран "Универ"
            <div className="admin-panel-box">
              <label className="admin-panel__label" htmlFor="">
                Выберите какое учреждение{" "}
                <span className="admin-panel__span">*</span>
              </label>
              <FormControl>
                <InputLabel id="second-select-label">
                  Выберите институт
                </InputLabel>
                <Select
                  className="admin-select"
                  labelId="second-select-label"
                  id="second-select"
                  value={selectedInstitute} // Передаем выбранный институт
                  onChange={handleInstituteChange} // Обработчик изменения второго Select
                  autoWidth
                  label="Выберите институт"
                >
                  <MenuItem value={'ИНСТИТУТ ЦИФРОВОЙ ТРАНСФОРМАЦИИ И ПРОГРАММИРОВАНИЯ'}>
                    ИНСТИТУТ ЦИФРОВОЙ ТРАНСФОРМАЦИИ И ПРОГРАММИРОВАНИЯ
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ ДИЗАЙНА, АРХИТЕКТУРЫ И ТЕКСТИЛЯ'}>
                    ИНСТИТУТ ДИЗАЙНА, АРХИТЕКТУРЫ И ТЕКСТИЛЯ
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ СТРОИТЕЛЬСТВА И ИННОВАЦИОННЫХ ТЕХНОЛОГИЙ'}>
                    ИНСТИТУТ СТРОИТЕЛЬСТВА И ИННОВАЦИОННЫХ ТЕХНОЛОГИЙ
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ ЭНЕРГЕТИКИ И ТРАНСПОРТА'}>
                    ИНСТИТУТ ЭНЕРГЕТИКИ И ТРАНСПОРТА
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ ЭКОНОМИКИ И МЕНЕДЖМЕНТА'}>
                    ИНСТИТУТ ЭКОНОМИКИ И МЕНЕДЖМЕНТА
                  </MenuItem>
                  <MenuItem value={'РОССИЙСКО - КЫРГЫЗСКИЙ ИНСТИТУТ АВТОМАТИЗАЦИИ УПРАВЛЕНИЯ БИЗНЕСА'}>
                    РОССИЙСКО - КЫРГЫЗСКИЙ ИНСТИТУТ АВТОМАТИЗАЦИИ УПРАВЛЕНИЯ
                    БИЗНЕСА
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ МЕЖКУЛЬТУРНОЙ КОММУНИКАЦИИ И ПСИХОЛОГИИ'}>
                    ИНСТИТУТ МЕЖКУЛЬТУРНОЙ КОММУНИКАЦИИ И ПСИХОЛОГИИ
                  </MenuItem>
                  <MenuItem value={'ИНСТИТУТ МАРКЕТИНГА И ЭЛЕКТРОННОЙ КОММЕРЦИИ'}>
                    ИНСТИТУТ МАРКЕТИНГА И ЭЛЕКТРОННОЙ КОММЕРЦИИ
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте обложку книги (в формате .png .jpg .jpeg){" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input
                accept='.jpg, .png, .jpeg'
                onChange={(e) => setPoster(e.target.files[0])} className="admin-panel__input" placeholder="" type="file"
            required/>
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте направление/жанр книги <span className="admin-panel__span">*</span>
            </label>
            <input
              className="admin-panel__input"
              placeholder="Пример - 'Архитектура / математика' "
              type="text"
              name='genre'
              value={bookData.genre}
              onChange={handleChangeBook}
              required
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте название книги{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input
              className="admin-panel__input"
              placeholder="Пример - 'Основы разработки' "
              type="text"
              required
              onChange={handleChangeBook}
              name='title'
              value={bookData.title}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте аннатоцию книги{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <textarea
              className="admin-panel__input"
              placeholder="Пример - 'Повесть Эрнеста Хемингуэя, вышедшая в 1952 году...'"
              type="text"
              required
              onChange={handleChangeBook}
              name='description'
              value={bookData.description}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте автора книги <span className="admin-panel__span">*</span>
            </label>
            <input
              className="admin-panel__input"
              placeholder="Пример - 'Александр Сергеевич Пушкин'"
              type="text"
              required
              onChange={handleChangeBook}
              name='author'
              value={bookData.author}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте количество страниц книги{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input
              className="admin-panel__input"
              placeholder="Пример - '250'"
              type="number"
              required
              onChange={handleChangeBook}
              name='page'
              value={bookData.page}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте год книги <span className="admin-panel__span">*</span>
            </label>
            <input
              className="admin-panel__input"
              placeholder="Пример - '2003'"
              type="number"
              required
              onChange={handleChangeBook}
              name='year'
              value={bookData.year}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте PDF-файл книги{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input className="admin-panel__input"
                   accept='.pdf'
                   onChange={(e) => setPdf(e.target.files[0])} type="file" required />
          </div>
          <div className="admin-panel-box">
            <button onClick={handleSubmit} className="admin-panel__btn">Сохранить</button>
          </div>
        </div>
      </Container>
      <Backdrop sx={{color: '#fff', zIndex: 1000000}} open={backdropState}>
        <Typography>Книга добавляется</Typography>
        <CircularProgress color="inherit"/>
      </Backdrop>
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
    </div>
  );
};

const AddNews = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const [backdropState, setBackdropState] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");


  const [newsData, setNewsData] = useState({
    title: "",
    description: "",
  })


  const [posterNews, setNewsPoster] = useState(null)

  const handleChangeNews = (e) => {
    setNewsData({...newsData, [e.target.name]: e.target.value});
  };



  const handleSubmitNews = (e) => {
    e.preventDefault()

    setBackdropState(true)

    const userToken = loadDataFromLocalStorage()
    if (!userToken.accessToken){
      navigate('/login')
    }

    const productData = new FormData()

    productData.append('description', newsData.description)
    productData.append('title', newsData.title)
    productData.append('image1', posterNews)

    const sendNewsPost = `${baseApi}/news/create_book/`

    axios.post(sendNewsPost, productData, {
      headers: {
        Authorization: `Bearer ${userToken.accessToken}`,
      }})
        .then((response) => {
          setBackdropState(false)
          setModalMessage('Книга отправлена!')
          setModalOpen(true);
          setTimeout(() => {
            setModalOpen(false)
            window.location.reload()
          }, 2500)

        })
        .catch((error) => {
          setBackdropState(false)
          setModalMessage("Произошла ошибка, проверьте правильность введенных данных и повторите попытку.")
          setModalOpen(true)

          setTimeout(() => {
            setModalOpen(false)
          }, 5000)
        })
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Container>
        <h2 className="admin-panel__head">Добавить новость</h2>
        <form action="" className="admin-panel__form">
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте обложку новости{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input
                accept='.jpg, .png, .jpeg'
                onChange={(e) => setNewsPoster(e.target.files[0])} className="admin-panel__input" placeholder="" type="file"
                required/>
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте название новости{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <input
                className="admin-panel__input"
                type="text"
                required
                onChange={handleChangeNews}
                name='title'
                value={newsData.title}
            />
          </div>
          <div className="admin-panel-box">
            <label className="admin-panel__label" htmlFor="">
              Добавьте описание новости{" "}
              <span className="admin-panel__span">*</span>
            </label>
            <textarea
                className="admin-panel__input"
                required
                onChange={handleChangeNews}
                name='description'
                value={newsData.description}
            />
          </div>
          <div className="admin-panel-box">
            <button onClick={handleSubmitNews} className="admin-panel__btn">Сохранить</button>
          </div>
        </form>
      </Container>
      <Backdrop sx={{color: '#fff', zIndex: 1000000}} open={backdropState}>
        <Typography>Книга добавляется</Typography>
        <CircularProgress color="inherit"/>
      </Backdrop>
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
    </div>
  );
};

const AdminPanel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Добавить книгу" />ИНФОРМАЦИЯ
          <Tab label="Добавить новость" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AddBook />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddNews />
        </TabPanel>
      </Box>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default AdminPanel;
