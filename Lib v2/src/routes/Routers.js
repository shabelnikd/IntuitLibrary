import React from "react";
import {Route, Routes} from "react-router-dom";
import {FavoriteProvider} from "../store/FavoritesActions";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import FavoritesPage from "../components/UI/favorites/Favorites";
import Category from "../pages/Category";
import CategoryComponent from "../pages/CategoryComponent";
import PersonalCard from "../pages/PersonalCard";
import Delivery from "../pages/Delivery";
import PasswordRecovery from "../pages/PasswordRecovery";
import DispatchPassword from "../pages/DispatchPassword";
import Account from "../pages/Account";
import FoodDetails from "../pages/FoodDetails";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import Avtors from "../pages/Avtors";
import Static from "../pages/Static";
import AuthorBooks from "../pages/AuthorBooks";
import StaticBook from "../pages/StaticBook";
import StaticPuple from "../pages/StaticPuple";

const App = ({ product }) => {
  return (
    <FavoriteProvider>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recovery" element={<PasswordRecovery />} />
          <Route path="/dispatch" element={<DispatchPassword />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/avtors" element={<Avtors product={product}/>} />
          <Route path="/Shop" element={<Shop product={product} />} />
          <Route
            path="/PersonalCard/:id"
            element={<PersonalCard product={product} />}
          />
          <Route path="/static" element={<Static product={product}/>} />
          <Route path="/author/:authorId" element={<AuthorBooks product={product}/>} />
          <Route path="/bookStatic/:bookId" element={<StaticBook/>} />
          <Route path="/Static/people" element={<StaticPuple/>} />

          <Route path="/Shop/*" element={<CategoryComponent />}>
            <Route path=":categoryName" element={<Category />}></Route>
          </Route>

          <Route path="/About" element={<About />} />
          <Route path="/All" element={<FoodDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Fragment>
    </FavoriteProvider>
  );
};


export default App;
