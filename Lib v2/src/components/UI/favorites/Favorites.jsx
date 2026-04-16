// favorites.jsx
import React from "react";
import "../../../styles/product-card.css";
import "../../../styles/product-details.css";
import "../../../styles/favorites.css";
import ProductCard from "../product-card/ProductCard";

const FavoritePage = ({userData}) => {
    return (
        <div>
            <h1 className="favorites-head">Сохраненные книги</h1>
                {!userData.fav ? (
                    <p className="favorites-title">Нет сохраненных книжек</p>
                ) : (
                    <ul className="favorites-block">
                        {userData.fav.map((product) => (
                            <ProductCard product={product.book} key={product.id}/>
                        ))}
                    </ul>
                )}
        </div>
    );
};

export default FavoritePage;
