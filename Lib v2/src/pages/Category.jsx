import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ProductCard from "../components/UI/product-card/ProductCard";
import {Pagination, Stack} from "@mui/material";

const Category = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Количество товаров на одной странице
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    fetch("https://api.moresushikg.shop/view_products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, [categoryName, navigate]);

  // Фильтруем товары по categoryName
  const filteredProducts = products.filter(
    (item) => item.category === categoryName
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="main-shop__block">
        <h1 className="main__shop-text">{categoryName}</h1>
        <p className="main__shop-desc">
          Стильные и технологичные модели одежды DanaOpt для детей. Большой
          выбор изделий на любой сезон.
        </p>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="error">Здесь пока пусто, но мы работаем над этим.</div>
      ) : (
        <div className="product-box">
          {filteredProducts
            .slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}

      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => handlePageChange(value)}
            sx={{
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#B0004C",
                color: "#212E45",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Category;

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const ShopPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');
//   useEffect(() => {
//     // Воспользуйтесь вашим методом получения данных
//     // Здесь используется fetch для целей демонстрации
//     fetch("https://api.moresushikg.shop/view_products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Ошибка загрузки данных:", error));
//   }, []);

//   useEffect(() => {
//     // Извлечение информации о категории и подкатегории из URL
//     const pathSegments = location.pathname.split('/');
//     if (pathSegments.length >= 4) {
//       setCategory(pathSegments[2]);
//       setSubcategory(pathSegments[3]);
//     }
//   }, [location.pathname]);

//   // Здесь вы можете использовать категорию и подкатегорию для генерации текста и карточек
//   const generateContent = () => {
//     // Ваша логика генерации контента на основе category и subcategory
//     // Например:
//     return (
//       <div>
//         <h2>{`Категория: ${category}`}</h2>
//         <h3>{`Подкатегория: ${subcategory}`}</h3>
//         {/* Ваш код для генерации карточек */}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Link to="/Shop/Category1/Subcategory1">Подкатегория 1</Link>
//       {generateContent()}
//     </div>
//   );
// };

// export default ShopPage;
