// ProductCard.jsx
import React, {useState} from "react";
import "../../../styles/product-card.css";
import "animate.css";
import "../../../styles/shopping-cart.css";
import "../../../styles/product-details.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";
import {baseApi, loadDataFromLocalStorage} from "../../../api";

const ProductCard = ({ product, is_author }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const handleDelete = (e) => {
    const userData = loadDataFromLocalStorage()
    axios.delete(`${baseApi}/books/${product.id}/delete_book/`, {
      headers: {
        Authorization: `Bearer ${userData.accessToken}`,
      }}).then((response) => {
      //alert("Пароль восстановлен!")
      setModalMessage(
          `Книга удалена!`
      );
      setModalOpen(true);

      setTimeout(() => {
        window.location.reload()
      }, 2000)
      console.log(response)
    })
  }

  return (

    <div

      className="card__unit"
      key={product.id}
    >
      <Link to={`/PersonalCard/${product.id}`}>
      <img src={product.images} className="card__unit-image" alt="" />
      <div className="cart1 animate__animated animate__fadeInUp animate__faster">
        <div className="card__unit-desc-favorites">
          <h4 className="card__unit-desc"> Автор:  <span className="card__unit-span">"{product.author}"</span></h4>
        </div>
        <p className="card__unit-title">
          Название: <span className="card__unit-span">"{product.title}"</span>
        </p>
        <p className="card__unit-title">
          Жанр: <span className="card__unit-span">"{product.genres.name}"</span>
        </p>
        <p className="card__unit-title">
          Год книги: <span className="card__unit-span">"{product.year}"</span>
        </p>

        <button className="card_unit-btn">Подробнее</button>
      </div>
      </Link>
      {is_author && (
          <Button color={'error'}
                  onClick={handleDelete}
          >
            Удалить
          </Button>
      )}
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
    </div>
  );
};

export default ProductCard;
