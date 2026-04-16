// ProductCard.jsx
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice";
import "../../styles/product-card.css";
import "animate.css";
import "../../styles/shopping-cart.css";
import "../../styles/individualcard.css";
import {useFavorite} from "../../store/FavoritesActions";
import image5 from "../../assets/images/convert.png";
import image6 from "../../assets/images/convert.png";
import image1 from "../../assets/images/bodysuit.png";
import image2 from "../../assets/images/bodysuit.png";
import image3 from "../../assets/images/bg-about.png";
import image4 from "../../assets/images/bg-about.png";
import styled from "styled-components";

const IndividualCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { addToFavorites, removeFromFavorites, favorites } = useFavorite();
  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const [message, setMessage] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const buttonValues = [52, 54, 56, 58, 60, 62];
  const images = [image1, image2, image3, image4, image5, image6];

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product);
      setMessage("Товар удален из избранного");
    } else {
      addToFavorites(product);
      setMessage("Товар добавлен в избранное");
    }

    // Если вы хотите, чтобы сообщение исчезло через некоторое время
    setTimeout(() => {
      setMessage("");
    }, 2000); // 2000 миллисекунд (2 секунды) - вы можете настроить это значение по своему усмотрению
  };

  const onAddToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        title: product.product_name,
        price: product.price,
        photo_path: product.photo_path,
        category: product.category,
        description: product.description,
        quantity: quantity,
      })
    );
    // Сбрасываем значение quantity обратно на 1
    setQuantity(1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const addToCart = () => {
    onAddToCart();
  };
  const SliderContainer = styled.div`
    display: flex;
    width: 65%;
  `;

  const SlideBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  `;

  const Slide = styled.div`
    width: 250px;
    margin: 10px;
    transition: transform 0.5s ease;
    cursor: pointer;
    position: relative;
    &:hover {
      opacity: 0.8;
    }
  `;
  const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
  `;
  const CenterImage = styled(Image)`
    margin: 0 2%;
  `;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="individcard" key={product.id}>
      {/* <img src={logo_card} className="individcard-logo" alt="" /> */}
      {/* <img src={photo} className="individcard-image" alt="" /> */}
      {/* <img
        src={`https://api.moresushikg.shop/static/uploads/${product.photo_path}`}
        className="individcard-image"
        alt=""
      /> */}
      
      <SliderContainer>
        <SlideBlock>
          {images.map((image, index) => (
            <Slide
              className="slider"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <Image src={image} alt={`Фотография ${index + 1}`} />
            </Slide>
          ))}
        </SlideBlock>
        <div className="">
          <CenterImage
            src={images[currentIndex]}
            alt={`Фотография ${currentIndex + 1}`}
          />
        </div>
      </SliderContainer>
      <div className="individcard-block__text">
        <div className="individcard-desc-favorites">
          <h4 className="individcard-desc">{product.product_name}</h4>
          <p className="individcard-title">{product.description}</p>
        </div>
        <div className="individcard-price-quantity">
          <p className="individcard-p">кол-во</p>
          <div className="individcard-controls">
            <button onClick={decreaseQuantity}>–</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p className="individcard-price">{product.price} сом</p>
        </div>
        <div>
          <h5 className="individcard-text-size">Выберите размер</h5>
          <div className="indivicard-block__size">
            {buttonValues.map((value, index) => (
              <button
                key={index}
                className={`individcard-btn-size button ${
                  selectedValue === value ? "active" : ""
                }`}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="individcard-block__order">
          <button className="individcard-btn" onClick={addToCart}>
            Добавить в корзину
          </button>
          <button onClick={toggleFavorite} className="individcard-btn">
            {isFavorite ? (
              <p>Удалить из избранного</p>
            ) : (
              <p>Добавить в избранное</p>
            )}
          </button>
        </div>

        <p className="individcard-messege">{message}</p>
      </div>
    </div>
  );
};

export default IndividualCard;

// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";
// import image1 from "../../assets/images/bodysuit.png";
// import image2 from "../../assets/images/bg-about.png";
// import image3 from "../../assets/images/convert.png";

// const SliderContainer = styled.div`
//   display: flex;
//   overflow: hidden;
//   width: 100%;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const Slide = styled.div`
//   flex: 0 0 33.33%;
//   transition: transform 0.5s ease;
//   cursor: pointer;
//   position: relative;

//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
// `;

// const CenterImage = styled(Image)`
//   flex: 0 0 66.66%;
//   margin: 0 2%;
// `;

// const images = [image1, image2, image3];

// const IndividualCard = (product) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = product.images || [];
//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="">
//       {/* Отображение фотографий */}
//       <SliderContainer>
//         {images.map((image, index) => (
//           <Slide key={index} onClick={() => handleImageClick(index)}>
//             <Image src={`https://api.moresushikg.shop/static/uploads/${product.photo_path}`} alt={`Фотография ${index + 1}`} />
//           </Slide>
//         ))}
// //       </SliderContainer>
//       {/* Отображение центральной фотографии */}
//   {/* <CenterImage
//     src={product.images[currentIndex]}
//     alt={`Фотография ${currentIndex + 1}`}
//   /> */}
//        {/* Проверяем, есть ли у продукта описание */}
//        <p>{product.description || 'Описание отсутствует'}</p>
//       {/* Проверяем, есть ли у продукта цена */}
//       <p>{product.price || 'Цена отсутствует'}</p>
//       {/* Другие детали продукта */}
//     </div>
//   );
// };

// export default IndividualCard;
