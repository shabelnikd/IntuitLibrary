// SearchBar.js
import React from 'react';
import '../../styles/Search.css'
import Seacrh__icon from "../../assets/images/search.png"
import Seacrh__close from "../../assets/images/close.png"

const SearchBar = ({ onSearch, onSearchClose }) => {
  const handleChange = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="input-container">
      <input type="text" className='searchbar' onChange={handleChange} placeholder="Поиск по названию книги" />
      <img src={Seacrh__icon} className='input-image' alt="" />
      <button className='btn-close__search' onClick={onSearchClose}><img src={Seacrh__close} alt="" /></button>
    </div>
  );
};

export default SearchBar;
