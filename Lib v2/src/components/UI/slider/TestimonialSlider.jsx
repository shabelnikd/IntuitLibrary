import React from "react";
import Slider from "react-slick";
import slider__slow_1 from "../../../assets/images/slider__1.png";
import slider__slow_2 from "../../../assets/images/slider__2.png";
import slider__slow_3 from "../../../assets/images/slider__3.png";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <div className="slider__content-text">
            <h1 className="slider__content-head">
              НАУЧНО-ИНФОРМАЦИОННАЯ
              <br /> БИБЛИОТЕКА
            </h1>
            <p className="slider__content-desc">
              Читай онлайн и делись впечатлениями!
            </p>
            <p className="slider__content-desc">Новости - 16.02.2024</p>
          </div>
          <img src={slider__slow_1} alt="" />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <div className="slider__content-text">
            <h1 className="slider__content-head">ДАРСТВЕННЫЕ КНИГИ</h1>
            <p className="slider__content-desc none">
              МОиН КР Международный университет инновационных технологий
              выражает признательность благодарность дарителям за вклад в
              формирование книжного фонда библиотеки. Данные экземпляры займут
              достойное место в фонде нашей библиотеки. Среди подаренных книг
              есть уникальные издания
            </p>
            <p className="slider__content-desc">Новости - 16.02.2024</p>
          </div>
          <img src={slider__slow_2} alt="" />
        </div>
      </div>
      <div>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <div className="slider__content-text">
            <h1 className="slider__content-head">
              Всемирный день книг и авторского права
            </h1>
            <p className="slider__content-desc none">
              Этот день подчеркивает особое значение роли книг и авторского
              права в развитии культуры мира, толерантности и межкультурного
              диалога. Благодаря книге, прежде всего, люди получают доступ к
              знаниям, идеям, духовным и моральным ценностям, к пониманию
              красоты и творческим достижениям человека. Носитель информации,
              основа образования и творчества, книга дает возможность каждой
              культуре рассказать о себе, знакомит с обычаями и традициями
              разных народов. Книга – это …
            </p>
            <p className="slider__content-desc">Новости - 16.02.2024</p>
          </div>
          <img src={slider__slow_3} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
