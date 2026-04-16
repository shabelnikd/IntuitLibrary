// SearchResult.js
import React from "react";
import {Link} from "react-router-dom";
import "../../styles/Search.css";

const SearchResult = ({ results, closeSearch, onSearchClose }) => {
  console.log(results);
  const handleResultClick = () => {
    // Вызовите функцию для закрытия поисковой строки
    closeSearch();
  };

  return (
    <div className="search-result" onClick={onSearchClose}>
      {results.map((result) => (
        <div className="search-result__box">
          <Link
            to={`/PersonalCard/${result.id}`}
            className="search-result__link"
            key={result.id}
            onClick={handleResultClick}
          >
            {/* Отобразите данные в виде карточки */}
            <img src={result.image1} className="search-result-img" alt="" />
            {/* <img
              src={`https://api.moresushikg.shop/static/uploads/${result.photo_path}`}
              className="search-result-img"
              alt=""
            /> */}
            <p className="search__title">{result.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;

// {results.map((result) => (
//   <div key={result.id}>
//     {/* Отобразите данные в виде карточки */}
//     <p>{result.name}</p>
//     {/* Добавьте другие поля, необходимые для вашего контента */}
//   </div>
// ))}
