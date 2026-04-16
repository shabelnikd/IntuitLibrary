import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import {FavoriteProvider} from "./store/FavoritesActions"; // Укажите правильный путь
import {AlertProvider} from "./components/UI/Alert/AlertContext ";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AlertProvider> {/* Оборачиваем App в AlertProvider */}
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </AlertProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
