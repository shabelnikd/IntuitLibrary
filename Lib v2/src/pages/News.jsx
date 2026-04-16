import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/news.css";
import {Container} from "reactstrap";
import NewsImgOne from "../assets/images/news-img.png";
import NewsImgTwo from "../assets/images/news-img-two.png";

const News = () => {
  return (
    <Helmet title="News">
      <section className="news">
        <Container>
          <h2 className="news-head">Новости</h2>
          <div className="news-block">
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgOne} alt="" />
                <h2 className="news-block__box__head">ДАРСТВЕННЫЕ КНИГИ </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  27 МАЯ В КЫРГЫЗСТАНЕ ОТМЕЧАЮТ ДЕНЬ БИБЛИОТЕК
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgTwo} alt="" />
                <h2 className="news-block__box__head">
                  Всемирный день книг и авторского права
                </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  Бесплатные ресурсы для самостоятельного обучения онлайн
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgOne} alt="" />
                <h2 className="news-block__box__head">ДАРСТВЕННЫЕ КНИГИ </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  27 МАЯ В КЫРГЫЗСТАНЕ ОТМЕЧАЮТ ДЕНЬ БИБЛИОТЕК
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgTwo} alt="" />
                <h2 className="news-block__box__head">
                  Всемирный день книг и авторского права
                </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  Бесплатные ресурсы для самостоятельного обучения онлайн
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgOne} alt="" />
                <h2 className="news-block__box__head">ДАРСТВЕННЫЕ КНИГИ </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  27 МАЯ В КЫРГЫЗСТАНЕ ОТМЕЧАЮТ ДЕНЬ БИБЛИОТЕК
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
            <div className="news-block__box">
              <div className="news-block__box__img">
                <img src={NewsImgTwo} alt="" />
                <h2 className="news-block__box__head">
                  Всемирный день книг и авторского права
                </h2>
              </div>
              <div className="news-block__box-text">
                <h3 className="news-block__box__text__head">
                  Бесплатные ресурсы для самостоятельного обучения онлайн
                </h3>
                <p className="news-block__box__text__desc">
                  Новости - 27.05.2020
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default News;
