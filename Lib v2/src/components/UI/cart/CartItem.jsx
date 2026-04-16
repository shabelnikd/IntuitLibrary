import React from "react";

import "../../../styles/cart-item.css";

import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/shopping-cart/cartSlice";
import basket from "../../../assets/images/basket.png";
import photo from "../../../assets/images/convert.png";

const CartItem = ({ item }) => {
  const { id, title, price, description, quantity, photo_path } =
    item;
  const totalPrice = quantity * price;
  console.log(item);
  const dispatch = useDispatch();
  console.log(quantity);
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
        photo_path,
        quantity,
        totalPrice,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div className="cart__item-info">
      {/* <img
          className="cart__item-info-img"
          src={`https://api.moresushikg.shop/static/uploads/${photo_path}`}
          alt=""
        /> */}
      <img src={photo} className="cart__item-info-img" alt="" />
      <div className="cart__product-info">
        <div>
          <div className="cart__product-head">
            <h6 className="cart__product-title">{title}</h6>
            {/* <h6 className="cart__product-title">{description}</h6> */}
            <p className="cart__product-price">{totalPrice} сом</p>
          </div>
          <div className="cart__product-quantity">
            <p className="cart__product-quantity-text">Кол-во</p>
            <div className="cart__product-quantity-box">
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="cart__product-box-size">
          <div className="cart__product-item-size">
            <span className="cart__product-item-size-text">Размер</span>
            <select name="" id="" className="cart__product-item-size-select">
              <option className="cart__product-item-size-option" value="">
                50
              </option>
              <option className="cart__product-item-size-option" value="">
                52
              </option>
              <option className="cart__product-item-size-option" value="">
                54
              </option>
              <option className="cart__product-item-size-option" value="">
                56
              </option>
              <option className="cart__product-item-size-option" value="">
                58
              </option>
            </select>
          </div>
          <span className="cart__product-delete-btn" onClick={deleteItem}>
            <img src={basket} alt="" />
            <span className="cart__product-delete-btn-text">Удалить</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
