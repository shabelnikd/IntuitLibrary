// FavoriteContext.js
import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter((item) => item.id !== action.payload.id) };
    default:
      return state;
  }
};

const FavoriteContext = createContext();

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used within a FavoriteProvider');
  }

  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (product) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: product });
  };

  return (
    <FavoriteContext.Provider value={{ favorites: state.favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};

