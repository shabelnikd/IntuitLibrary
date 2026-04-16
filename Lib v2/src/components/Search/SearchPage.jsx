// SearchPage.js
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import '../../styles/Search.css'

const SearchPage = ( {product}) => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Воспользуйтесь вашим методом получения данных
    // Здесь используется fetch для целей демонстрации
    // fetch('https://libapi.intuit-journal.online/api/v1/books/')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch((error) => console.error('Ошибка загрузки данных:', error));
    setProducts(product)
  }, [product, setProducts]);
  
  const handleSearch = (query) => {
    // Если поле ввода пустое, не отображаем результаты
    const filteredResults = query
      ? products.filter((item) => item.title && item.title.toLowerCase().includes(query.toLowerCase()))
      : [];
    setSearchResults(filteredResults);
    setIsSearchOpen(true);
  };
  const handleCloseSearch = () => {
    // Закрывает поисковую строку
    setIsSearchOpen(false);
  };
  return (
    <div className='search-page'>
      <SearchBar onSearch={handleSearch}/>
      {isSearchOpen && searchResults.length > 0 && <SearchResult results={searchResults} closeSearch={handleCloseSearch}/>}
    </div>
  );
};

export default SearchPage;
