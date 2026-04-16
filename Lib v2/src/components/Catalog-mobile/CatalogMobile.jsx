import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../styles/catalog-mobile.css";
import Header from "../Header/Header";
import axios from "axios";
import {Link} from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({onClose}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.moresushikg.shop/view_products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="catalog-mobile">
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "#B0004C" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="#B0004C"
          >
            <Tab label="Одежда" {...a11yProps(0)} />
            <Tab label="На выписку" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {uniqueCategories.map((uniqueCategory) => (
            <Link key={uniqueCategory} to={`/Shop/${uniqueCategory}`} className="category-item" onClick={onClose}>
              {`${uniqueCategory} (${
                products.filter(
                  (product) => product.category === uniqueCategory
                ).length
              })`}
            </Link>
          ))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {uniqueCategories.map((uniqueCategory) => (
            <Link key={uniqueCategory} to={`/Shop/${uniqueCategory}`} className="category-item">
              {`${uniqueCategory} (${
                products.filter(
                  (product) => product.category === uniqueCategory
                ).length
              })`}
            </Link>
          ))}
        </CustomTabPanel>
      </Box>
    </div>
  );
}
