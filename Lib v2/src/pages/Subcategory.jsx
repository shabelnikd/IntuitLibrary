import React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCart from "../components/UI/product-card/ProductCard";
import "../styles/shop.css"

const SubCategory = ({ match }) => {
    const { params } = match;
    const { category } = params;
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Запрос к API для получения товаров в категории
      axios
        .get(`https://api.moresushikg.shop/view_products?category=${category}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, [category]);
  
    return (
      <div>
        <h1>{`Товары в категории ${category}`}</h1>
        <div className="product-box">
          {products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              // Добавьте другие необходимые пропсы
            />
          ))}
        </div>
      </div>
    );
  };

export default SubCategory;





// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Subcategory = () => {
//   // Извлекаем параметры маршрута
//   const { subcategory } = useParams();

//   // Простая логика для загрузки контента
//   let content = null;

//   switch (subcategory) {
//     case 'Subcategory1':
//       content = 'Контент для Подкатегории 1';
//       break;
//     case 'Subcategory2':
//       content = 'Контент для Подкатегории 2';
//       break;
//     case 'Subcategory3':
//       content = 'Контент для Подкатегории 3';
//       break;
//     case 'Subcategory4':
//       content = 'Контент для Подкатегории 4';
//       break;
//     case 'Subcategory5':
//       content = 'Контент для Подкатегории 5';
//       break;
//     default:
//       content = 'Нет контента для выбранной подкатегории';
//   }

//   return (
//     <div>
//       <h2>Подкатегория: {subcategory}</h2>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default Subcategory;