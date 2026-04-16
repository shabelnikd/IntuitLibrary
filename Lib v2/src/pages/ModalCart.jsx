import React from "react";
import {Button, Modal} from 'react-bootstrap';

const ModalCart = (totalAmount) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Вы уверены, что хотите оформить заказ?</p>
          <p>Общая сумма заказа составляет {totalAmount} сом.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCart;
