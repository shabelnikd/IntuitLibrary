import React, {useEffect, useState} from "react";
import ProductCart from "../components/UI/product-card/ProductCard";
import "../styles/shop.css";
import {Pagination, Stack} from "@mui/material";
import "../styles/home.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Shop = ({product}) => {
  const [productsSql, setProductsSql] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [exchangeRate, setExchangeRate] = useState(1); // Предположим, что у вас есть состояние для курса обмена
  const [selectedDirection, setSelectedDirection] = useState(null);

  const [page, setPage] = useState(1);
  const productsPerPage = 24;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const [uniqueDirections, setUniqueDirections] = useState([]);

  useEffect(() => {
    setProductsSql(product)
  }, [product]);

  useEffect(() => {
    if (productsSql.length > 0) {
      const directionNames = productsSql.map(
        (product) => product.direction_name.name
      );
      const uniqueDirections = Array.from(new Set(directionNames));
      setUniqueDirections(uniqueDirections.filter((item) => (item!=='КОЛЛЕДЖ')).slice(0, 8));
    }
  }, [productsSql]);

  useEffect(() => {
    // Если массив продуктов не пустой и выбрано направление, фильтруем продукты
    if (productsSql.length > 0 && selectedDirection !== null) {
      const filteredProducts = productsSql.filter(
        (product) => product.direction_name.name === selectedDirection
      );
      setDisplayedProducts(filteredProducts);
    } else {
      setDisplayedProducts(productsSql.slice(startIndex, endIndex));
    }
  }, [productsSql, selectedDirection, page, endIndex, startIndex]);

  const handleFilterByDirection = (direction) => {
    setSelectedDirection(direction);
  };

  const handleDirectionButtonClick = (direction) => {
    setSelectedDirection(direction);
  };

  const handleShowAllBooks = () => {
    setSelectedDirection(null); // Сбрасываем выбранное направление
  };

  return (
    <div>
      <div className="accordion-block">
        <div className="block">
          <div className="accordion-box">
            <h2 className="accordion-head">МУИТ</h2>
            <button className="accordion-btn" onClick={handleShowAllBooks}>
              <Accordion>
                <AccordionDetails
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Все книги</Typography>
                </AccordionDetails>
              </Accordion>
            </button>
            <Accordion className="accordion-style">
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Институты{" "}
                 ( {uniqueDirections.reduce(
                    (total, direction) =>
                      total +
                      productsSql.filter(
                        (product) => product.direction_name.name === direction
                      ).length,
                    0
                  )}{" "})
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    {uniqueDirections.map((direction, index) => (
                      <li key={index}>
                        <Accordion className="accordion-style__box">
                          <AccordionDetails
                            aria-controls={`panel${index + 1}-content`}
                            id={`panel${index + 1}-header`}
                          >
                            <Typography>
                              <button
                                className="accordion-btn"
                                onClick={() =>
                                  handleDirectionButtonClick(direction)
                                }
                              >
                                {direction} (
                                <span>{direction.length} книг</span>)
                              </button>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="accordion-style__box">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Колледжи {""} (
                <span>
                  {
                    productsSql.filter(
                      (product) => product.direction_name.name === "КОЛЛЕДЖ"
                    ).length
                  }
                </span>
                )
              </AccordionSummary>
              <AccordionDetails>
                <button
                  className="accordion-btn"
                  onClick={() => handleFilterByDirection("КОЛЛЕДЖ")}
                >
                  КИТЭ
                </button>
              </AccordionDetails>
              <AccordionDetails>
                <button
                  className="accordion-btn"
                  onClick={() => handleFilterByDirection("КОЛЛЕДЖ")}
                >
                  КОМТЕХНО
                </button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {selectedDirection !== null ? (
          // Если выбрано направление, отображаем отфильтрованные книги
          displayedProducts.length === 0 ? (
            <div className="error">
              Здесь пока пусто, но мы работаем над этим.
            </div>
          ) : (
            <div className="product-box">
              {displayedProducts.map((product) => (
                <ProductCart
                  key={product.id}
                  product={product}
                  exchangeRate={exchangeRate}
                />
              ))}
            </div>
          )
        ) : // Если ни одно направление не выбрано, отображаем все книги
        productsSql.length === 0 ? (
          <div className="error">
            Здесь пока пусто, но мы работаем над этим.
          </div>
        ) : (
          <div className="product-box">
            {productsSql.slice(startIndex, endIndex).map((product) => (
              <ProductCart
                key={product.id}
                product={product}
                exchangeRate={exchangeRate}
              />
            ))}
          </div>
        )}
      </div>

      <div className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(
              (selectedDirection !== null
                ? displayedProducts.length
                : productsSql.length) / productsPerPage
            )}
            color="primary"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Shop;
