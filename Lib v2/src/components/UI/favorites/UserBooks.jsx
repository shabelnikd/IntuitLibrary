// favorites.jsx
import React from "react";
import "../../../styles/product-card.css";
import "../../../styles/product-details.css";
import "../../../styles/favorites.css";
import ProductCard from "../product-card/ProductCard";

const UserBooksPage = ({userData}) => {
    return (
        <div>
            <h1 className="favorites-head">Книги добавленные вами</h1>

                {!userData.user_books ? (
                    <p className="favorites-title">Нет книг добавленных вами</p>
                ) : (
                    <ul className="favorites-block">
                        {userData.user_books.map((product) => (
                            <ProductCard product={product } key={product.id} is_author={true}/>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default UserBooksPage;
