import React, {useState} from "react";
import Helmet from "../components/Helmet/Helmet";
import {Container, Modal} from "reactstrap";
import "../styles/about.css";
import Videoplay from "../components/videoplay-block/Videoplay.jsx";
import Collections from "../components/Collections/Collections.jsx";
import certificate1 from "../assets/images/certificate1.png";
import certificate2 from "../assets/images/certificate2.png";
import certificate3 from "../assets/images/certificate3.png";
import Questions from "../components/Questions/Questions";

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCertificate = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCertificate = isFlipped ? certificate3 : certificate2;

  const openModal = (imageURL) => {
    setSelectedImage(imageURL);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  return (
    <Helmet title="О нас">
      <section>
        <div className="about">
          <div className="about-block__head">
            <h3 className="about-block__head-title">ТОРГОВАЯ МАРКА DANA</h3>
            <p className="about-block__head-desc">
              Торговая марка Dana – это молодой и активно развивающийся бренд,
              который представляет уникальную линию одежды для новорождённых
              детей.
              <br />
              <br />
              Концепция компании – это разработка продукции, соответствующей
              желаниям сегодняшних родителей: удобных, качественных и недорогих
              вещей, которые были бы доступны всем.
            </p>
          </div>
          <Container>
            <div className="about-block__statistics">
              <div className="about-block__statistics-box">
                <p className="about-block__statistics__box__desc">2014</p>
                <p className="about-block__statistics__box__desc">
                  Год основания
                </p>
              </div>
              <div className="about-block__statistics-box">
                <p className="about-block__statistics__box__desc">220 +</p>
                <p className="about-block__statistics__box__desc">Клиентов</p>
              </div>
              <div className="about-block__statistics-box">
                <p className="about-block__statistics__box__desc">50 +</p>
                <p className="about-block__statistics__box__desc">
                  Сотрудников
                </p>
              </div>
              <div className="about-block__statistics-box">
                <p className="about-block__statistics__box__desc">40 +</p>
                <p className="about-block__statistics__box__desc">
                  Экспорт в города
                </p>
              </div>
            </div>
          </Container>
        </div>
        <Videoplay />
        <Container>
          <div className="about-block__text">
            <p className="about-block__text__desc">
              Швейное предприятие Dana была основана в 2014 году. В течении 8
              лет работы, благодаря профессиональной команде Dana и дизайнерами
              было разработано более 200 коллекций и моделей одежды, а также
              аксессуаров для новорожденных детей. На сегодняшний день вся
              продукция компании сертифицирована на рынке ЕАЭС, имеют
              сертификаты качества и успешно экспортируется в крупные города
              России и Казахстана.
            </p>
            <p className="about-block__text__desc">
              Ассортимент продукции Dana включает в себя: одежду и комплекты на
              выписку из роддома (с учётом времени года и различного фасона),
              одежду для новорожденных и детское постельное белье. Все материалы
              используемые на производстве тщательно отбираются, проходит
              контроль и обязательно имеют сертификаты качества.Компания предает
              большое значение составу ткани, выбирая только органический
              хлопок. Ведь основа ее идеологии- комфорт с первых дней жизни
              каждого малыша.
            </p>
          </div>
        </Container>
        <Container>
          <Collections />
        </Container>
        <div className="about-block__certificate">
          <h3 className="about-block__certificate__head">СЕРТИФИКАТЫ</h3>
          <div className="about-block__certificate__img">
            <img
              src={certificate1}
              alt=""
              className="about-block__certificate__image"
              onClick={() => openModal(certificate1)}
            />
            <div
              className={`certificate-gallery ${isFlipped ? "flipped" : ""}`}
            >
              <img
                src={currentCertificate}
                alt=""
                className="about-block__certificate__image"
                onClick={toggleCertificate}
              />
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Image Modal"
            >
              <button onClick={closeModal}>Закрыть</button>
              {selectedImage && <img src={selectedImage} alt="Full Size" />}
            </Modal>
          </div>
        </div>
        <Questions />
      </section>
    </Helmet>
  );
};

export default About;
