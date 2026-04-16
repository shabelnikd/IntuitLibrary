import React from "react";

import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";
import CartItem from "./CartItem";

import {useDispatch, useSelector} from "react-redux";
import {cartUiActions} from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const clearCart = () => {
    // Clear the cart
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">Корзина пустая</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <button onClick={clearCart}>
              Очистить корзину
            </button>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h4 style={{color: "white", marginBottom: "0px"}}>
            Итого : <span>{totalAmount} сом</span>
          </h4>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Заказать
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
