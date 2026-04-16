import React, {useEffect, useState} from 'react';
import {Avatar, Button, Grid, Modal, TextField, Typography} from '@mui/material';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // При монтировании компонента, загружаем комментарии из локального хранилища
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    // Создание нового комментария
    const newComment = {
      id: Date.now(), // Генерируем уникальный идентификатор
      text: comment,
      // Дополнительные поля о пользователе или времени можно добавить по желанию
    };

    // Обновление списка комментариев
    setComments([...comments, newComment]);

    // Сохранение списка комментариев в локальном хранилище
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));

    // Очистка поля комментария
    setComment('');

    // Закрытие модального окна
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
        Добавить комментарий
      </Button>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                multiline
                rows={3}
                variant="outlined"
                label="Добавить комментарий"
                value={comment}
                onChange={handleCommentChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSubmitComment}>
                Отправить
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography>{comment.text}</Typography>
            {/* Дополнительные поля комментария, например, информация о пользователе или время */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
