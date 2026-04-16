import React, {useEffect, useState} from "react";
import ProductCard from "../components/UI/product-card/ProductCard";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FreeMode, Keyboard, Mousewheel, Navigation, Pagination,} from "swiper/modules";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

const CardDetails = ({product}) => {
  const [products, setProducts] = useState([]);

  const settings = {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: true,
    mousewheel: true,
    pagination: {
      clickable: true,
    },
    modules: [FreeMode, Pagination, Mousewheel, Keyboard, Navigation],
  };

  const getRandomProducts = (allProducts, count) => {
    const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };


  useEffect(() => {
    // axios.get("http://localhost:8000/api/v1/books/random/")
    //     .then((res) => setProducts(res.data))
    //     .catch((error) => console.error("Error fetching data:", error))
    const randomProducts = getRandomProducts(product, 8);
    setProducts(randomProducts);
  }, [setProducts, product]);



  return (
      <>
      {products ? (
            <div className="card-details">
              <Swiper {...settings}>
                {products.map((product) => (
                    <SwiperSlide key={product.id} style={{width: "250px"}}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
        ) : (
          <Box sx={{ display: 'flex' }}><LinearProgress /></Box>
      )}
      </>
  );
};

export default CardDetails;
