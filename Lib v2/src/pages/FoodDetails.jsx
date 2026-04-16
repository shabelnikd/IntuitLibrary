import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Container} from "reactstrap";
import "../styles/product-details.css";
import "../styles/individualcard.css";
import "../styles/product-card.css";
import "animate.css";
import "../styles/shopping-cart.css";
import SavedActive from "../assets/images/saved-active.png";
import Saved from "../assets/images/saved.png";

import {Avatar, Button, Grid, Modal, TextField, Typography,} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "../styles/account.css";
import {baseApi, loadDataFromLocalStorage} from "../api";

const FoodDetails = ({ product, productId }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userToken = loadDataFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${productId}`)) || [];
    setComments(storedComments);
  }, [productId]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!userToken.accessToken) {
      navigate("/login");
    }
    const sendFav = `${baseApi}/books/${product.id}/add_favorite/`;

    axios
      .get(sendFav, {
        headers: {
          Authorization: `Bearer ${userToken.accessToken}`,
        },
      })
      .then((response) => {
        setModalMessage(response.data);
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
        }, 2500);
      })
      .catch((error) => {
        setModalMessage(
          "Проверьте вошли ли вы в аккаунт или попробуйте перевойти"
        );
        setModalOpen(true);

        setTimeout(() => {
          setModalOpen(false);
        }, 5000);
      });
    setIsSaved(!isSaved);
  };
  const [isSaved, setIsSaved] = useState(false);
  const buttonImage = isSaved ? SavedActive : Saved;

  const handleSubmitComment = () => {
    const newComment = {
      id: Date.now(),
      text: comment,
      date: new Date().toISOString(), // Добавляем текущую дату и время в формате ISO
    };

    setComments([...comments, newComment]);
    localStorage.setItem(
      `comments_${productId}`,
      JSON.stringify([...comments, newComment])
    );
    setComment("");
    setIsModalOpen(false);
  };

  const accessToken = loadDataFromLocalStorage()
  const handleDownload = () => {
    if (accessToken.accessToken) {
      axios.get(`https://libapi.intuit-journal.online/api/v1/books/${product.id}/add_down/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken.accessToken}`,
            }})
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err))
    }

  }

  return (
    <section>
      <Container>
        <div className="personal-box">
          <div className="personal-box__img">
            <img src={product.images} alt="" />
          </div>
          <div className="personal-box__text">
            <div className="persona-box__saved">
              <h1 className="personal-box__head">{product.title}</h1>
              <button onClick={handleClick} className="favorites__btn">
                <img src={buttonImage} alt="" />
              </button>

            </div>
            <p className="personal-box__desc">
              Автор:<span className="personal-box__span">{product.author}</span>
            </p>
            <p className="personal-box__desc">
              Объем:
              <span className="personal-box__span">
                {product.pages} страниц
              </span>
            </p>
            <p className="personal-box__desc">
              Жанр:
              <span className="personal-box__span">{product.genres.name}</span>
            </p>
            <p className="personal-box__desc">
              Год:<span className="personal-box__span">{product.year}</span>
            </p>
            <VisibilityIcon/>{' '}{product.total_views}
            <FileDownloadIcon style={{marginLeft: '10px'}}/>{' '}{product.total_down}
            <Link to={`/bookStatic/${product.id}`} style={{marginLeft: '10px', color: '#292283'}}>Просмотреть статистику</Link>
            <br/>
            <Button
                onClick={handleDownload}>
            <Link
              to={product.pdf}
              className="personal-box__btn"
              target="_blank"

            >
              Читать
            </Link>

            </Button>





          </div>
        </div>
        <div className="personal-annotation">
          <h1 className="personal-annotation-head">Аннотация</h1>
          <p className="persona-annotation__desc">{product.description}</p>
        </div>
      </Container>
      <Container>
        <div className="review">
          <h1 className="personal-review-head">Отзывы:</h1>
          <div className="review-modal">
            {/* Модальное окно для добавления комментария */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <div className="review-modal__open">
                <h3 className="review-modal__open__text">
                  Оставьте свой отзыв
                </h3>
                <Grid item xs>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Добавить комментарий"
                    value={comment}
                    onChange={handleCommentChange}
                  />
                </Grid>
                <Grid item style={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmitComment}
                    className="review-modal__open-btn"
                  >
                    Отправить
                  </Button>
                </Grid>
              </div>
            </Modal>
            {/* Отображение комментариев */}
            <div>
              {product.comments.length > 0 ? (
                product.comments.map((comment) => (
                  <div key={comment.id} className="review-users">
                    <div className="review-date__users">
                      <Avatar
                        sx={{ bgcolor: "#292283" }}
                        src="/broken-image.jpg"
                        className="avatart__account"
                      />
                      <div className="user-data">
                        <p className="user-data__text">{comment.name}</p>
                        <Typography variant="caption" color="textSecondary">
                          {comment.phone}
                        </Typography>
                        <br />
                        <Typography variant="caption" color="textSecondary">
                          Добавлено: {new Date(comment.date).toLocaleString()}
                        </Typography>
                      </div>
                    </div>
                    <Typography className="review-text">
                      {comment.text}
                    </Typography>
                  </div>
                ))
              ) : (
                <p className="text-error">Будь первый, оставь отзыв</p>
              )}
            </div>
            <div className="review-btn">
              <Button onClick={() => setIsModalOpen(true)}>
                Добавить отзыв
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {modalOpen && (
        <div style={{ zIndex: "1000000000000" }} className="modal-overlay">
          <div className="modal2">
            <p>
              {" "}
              <span>{modalMessage}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodDetails;
