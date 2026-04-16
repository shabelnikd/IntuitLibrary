// AlertContext.js
import React, {createContext, useContext, useState} from "react";
import "../../../styles/product-details.css";
import CheckMark from "../../../assets/images/check__mark.png";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 3500); // Скрывать через 3 секунды (или другое удобное вам время)
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      {alert && (
        <div className="alert">
          <img src={CheckMark} alt="" />
          {alert}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const showAlert = useContext(AlertContext);
  if (!showAlert) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return showAlert;
};
