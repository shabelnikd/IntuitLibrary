import React from "react";
import {Helmet as ReactHelmet} from "react-helmet";
import logoImagePath from '../../assets/images/logo.png';

const Helmet = (props) => {
  document.title = "Библиотека МУИТ";
  const randomParam = Math.random().toString(36).substring(7);
  return (
    <div className="w-100">
      <ReactHelmet>
        <title>Библиотека МУИТ</title>
        <meta property="og:image" content={`${logoImagePath}?${randomParam}`} />
        <meta name="twitter:image" content={`${logoImagePath}?${randomParam}`} />
      </ReactHelmet>
      {props.children}
    </div>

  );
};

export default Helmet;
{
  /* <meta name="description" content="Наслаждайтесь лучшими суши и роллами в нашем ресторане. Доставка и самовывоз доступны." />
<meta name="keywords" content="суши, роллы, японская кухня, ресторан суши, доставка суши" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta property="og:title" content="Ресторан суши и роллов - Лучшие блюда в вашем городе" />
<meta property="og:description" content="Наслаждайтесь лучшими суши и роллами в нашем ресторане. Доставка и самовывоз доступны." />
<meta property="og:type" content="website" />
<meta property="og:image" content="ссылка на изображение вашего ресторана" />
<meta property="og:url" content="ссылка на ваш сайт" />
<meta name="twitter:card" content="summary_large_image" />
<meta
name="description"
content="Изысканный японский ресторан с разнообразным меню. Отзывы, резервирование столов и доставка."
/>
<meta
name="keywords"
content="японский ресторан, суши, сашими, японская кухня, резервирование столов, доставка"
/>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="index, follow" />
<meta name="author" content="DanaOpt" />

{/* Метатег для изображения, которое будет использоваться при публикации в социальных сетях */
}
// {/* <meta property="og:image" content="ссылка на изображение" />

// {/* Дополнительные метатеги Open Graph для социальных сетей */}
// <meta property="og:title" content="Море суши" />
// <meta
// property="og:description"
// content="Изысканный японский ресторан с разнообразным меню. Отзывы, резервирование столов и доставка."
// />
// <meta property="og:url" content="ссылка на ваш веб-сайт" />
// <meta property="og:type" content="website" />

// {/* Twitter Card метатеги */}
// <meta name="twitter:card" content="summary_large_image" />
// <meta name="twitter:title" content="Море суши" />
// <meta
// name="twitter:description"
// content="Изысканный японский ресторан с разнообразным меню. Отзывы, резервирование столов и доставка."
// />
// <meta name="twitter:image" content="ссылка на изображение" /> */} */}
