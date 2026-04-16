import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import {Container} from "reactstrap";
import "../styles/home.css";
import News from "./News.jsx";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import Recommendations from "../components/Recommendations/Recommendations.jsx";
import Questions from "../components/Questions/Questions.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <TestimonialSlider />
        </Container>
      </section>
      <section className="delimiter"></section>
      <section>
        <Recommendations />
        <section className="delimiter"></section>
        <Questions />
        <section className="delimiter"></section>
        <News />
        <section className="delimiter"></section>
      </section>
    </Helmet>
  );
};

export default Home;
