import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.jsx";
import {useSelector} from "react-redux";


const Layout = ({product}) => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header product={product}/>
      {showCart && <Carts />}

      <div>
        <Routes product={product}/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
