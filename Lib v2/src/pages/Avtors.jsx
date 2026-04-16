import React, {useEffect, useState} from "react";
import ProductCard from "../components/UI/product-card/ProductCard";
import {Container, Pagination} from "@mui/material";
import "../styles/avtors.css";

const Avtors = ({product}) => {
  const [products, setProducts] = useState([]);
  const [searchAuthor, setSearchAuthor] = useState("");
  const [page, setPage] = useState(1);
  const productsPerPage = 24;

  useEffect(() => {
    setProducts(product)
  }, [setProducts, product]);

  const handleSearchChange = (e) => {
    setSearchAuthor(e.target.value);
    setPage(1); // Сбрасываем страницу при изменении поискового запроса
  };

  // Функция для фильтрации продуктов по автору
  const filteredProducts = products.filter((product) =>
    product.author.toLowerCase().includes(searchAuthor.toLowerCase())
  );

  // Вычисление количества страниц на основе отфильтрованных продуктов
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  // Вычисление индекса последнего продукта на текущей странице
  const indexOfLastProduct = page * productsPerPage;

  // Вычисление индекса первого продукта на текущей странице
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Получение продуктов для текущей страницы
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="avtors-block__search">
        <Container>
          <div className="avtors-block__flex">
            <h2 className="avtors-block__search__head">
              Введите имя любимого автора
            </h2>
            <input
              className="avtors-block__search__input"
              type="text"
              placeholder="Поиск по автору..."
              value={searchAuthor}
              onChange={handleSearchChange}
            />
          </div>
        </Container>
      </div>
      <Container>
        <ul className="avtors-box__book">
          {currentProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                borderRadius: "50%",
                backgroundColor: "#292283",
                color: "white",
                marginRight: "5px",
              },
              "& .Mui-selected": { backgroundColor: "white", color: "#292283" },
            }}
            className="pagination"
          />
        )}
      </Container>
    </div>
  );
};

export default Avtors;
