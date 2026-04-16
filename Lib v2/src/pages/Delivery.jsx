import React from "react";
import "../styles/delivery.css";

const Delivery = () => {
  return (
    <div>
      <div className="delivery-main">
        <h1 className="delivery-main__head">Комфорт с первых дней</h1>
        <div className="delivery-main__box">
          <div className="delivery-main__items">
            <p className="delivery-main__items__number">1</p>
            <p className="delivery-main__items__desc">
              Стабильное наличие продукции
            </p>
          </div>
          <div className="delivery-main__items">
            <p className="delivery-main__items__number">2</p>
            <p className="delivery-main__items__desc">
              Строгое соблюдение сроков
            </p>
          </div>
          <div className="delivery-main__items">
            <p className="delivery-main__items__number">3</p>
            <p className="delivery-main__items__desc">
              Идивидуальные условия сотрудничества
            </p>
          </div>
          <div className="delivery-main__items">
            <p className="delivery-main__items__number">4</p>
            <p className="delivery-main__items__desc">Гибкие цены</p>
          </div>
        </div>
      </div>
      <div className="delivery-decor">
        <h3 className="delivery-decor__head">Доставка</h3>
        <p className="delivery-decor__descr">
          Минимальная сумма заказа составляет 300$
        </p>
        <p className="delivery-decor__descr">
          Доставки в зарубежные страны осуществляются через транспортные
          компании: <br/> "Альфа карго" , "Сапат карго".
        </p>
        <h3 className="delivery-decor__head">Способы оплаты</h3>
        <p className="delivery-decor__descr">1) СИСТЕМА ДЕНЕЖНЫХ ПЕРЕВОДОВ</p>
        <p className="delivery-decor__descr">2) ПЕРЕВОДЫ ЧЕРЕЗ VISA</p>
        <p className="delivery-decor__descr">3) НА КАРТУ СБЕРБАНК</p>
        <p className="delivery-decor__descr">4) РАСЧЕТНЫЙ СЧЕТ</p>
        <h3 className="delivery-decor__head">Оформление заказа</h3>
        <d1>
          <li className="delivery-decor__descr">
            Вы выбираете интересующий вас товар и количество
          </li>
          <li className="delivery-decor__descr">
            Мы получаем заказ, проверяем остатки и выставим счет
          </li>
          <li className="delivery-decor__descr">
            Согласовываем способ оплаты и доставки
          </li>
          <li className="delivery-decor__descr">
            После получения денежных средств, осуществляем отправку
          </li>
          <li className="delivery-decor__descr">
            Сроки доставки с 4 – 10 дней до крупных городов России
          </li>
        </d1>
      </div>
    </div>
  );
};

export default Delivery;
