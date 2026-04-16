// CurrencyConverter.jsx
import React, {useState} from "react";

const CurrencyConverter = ({ product, onAddToCart }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("rub");
  const exchangeRate = 90;
  const convertPrice = (price, currency) => {
    if (currency === "usd") {
      return Math.round(price / exchangeRate);
    } else {
      return price;
    }
  };

  const getPrice = () => {
    if (selectedCurrency === "usd") {
      return convertPrice(product.price, "usd");
    } else {
      return product.price;
    }
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const addToCart = () => {
    const { id, product_name, photo_path, category, description } = product;
    const price = getPrice(); // Добавьте вывод в консоль
    console.log("Price:", price);
    onAddToCart({
      id,
      product_name,
      price: getPrice(),
      photo_path,
      category,
      description,
    });
  };

  return (
    <div>
      <button onClick={() => handleCurrencyChange("rub")}>Цена в рублях</button>
      <button onClick={() => handleCurrencyChange("usd")}>
        Цена в долларах
      </button>
      <button className="addTOCart__btn card__unit-btn" onClick={addToCart}>
        Заказать
      </button>
    </div>
  );
};

export default CurrencyConverter;
