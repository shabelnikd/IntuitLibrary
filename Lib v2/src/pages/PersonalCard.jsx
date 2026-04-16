import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CardDetails from "./CardDetails";
import "../styles/slider.css";
import FoodDetails from "./FoodDetails";
import axios from "axios";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {loadDataFromLocalStorage} from "../api";

const PersonalCard = ({product}) => {
  const [book, setBook] = useState(null)
  const { id } = useParams();
  const accessToken = loadDataFromLocalStorage();

  useEffect(() => {
      if (accessToken.accessToken) {
          axios.get(`https://libapi.intuit-journal.online/api/v1/books/${id}/add_view/`,
              {
                  headers: {
                      Authorization: `Bearer ${accessToken.accessToken}`,
                  }})
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err))
      }


      axios.get(`https://libapi.intuit-journal.online/api/v1/books/${id}/`)
        .then((res) => setBook(res.data))
        .catch((err) => console.log(err))
  }, [id, setBook]); // Заменяем categoryName на productName


  return (
    <div className="personal">
      <div className="personal-card">
          {book ? <FoodDetails product={book}/> : <Box sx={{ display: 'flex' }}><LinearProgress /></Box>}
      </div>
      <div className="personal-card__recom">
        <h3 className="personal-card__recom-text">
          Вам также может понравиться!
        </h3>
        <CardDetails product={product}/>
      </div>
    </div>
  );
};

export default PersonalCard;
