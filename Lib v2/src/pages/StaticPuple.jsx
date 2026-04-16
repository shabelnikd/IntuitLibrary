import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import "../styles/Static.css";

const StaticPuple = () => {
  const [stats, setStats] = useState([]);
  const [filteredStats, setFilteredStats] = useState([]);
  const [selectedDirection, setSelectedDirection] = useState(null);

  useEffect(() => {
    axios
      .get(`https://libapi.intuit-journal.online/api/v1/accounts/list/`)
      .then((response) => {
        const filteredBooks = response.data;
        setStats(filteredBooks);
        setFilteredStats(filteredBooks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleFilter = (direction) => {
    setSelectedDirection(direction);
    if (direction === "КИТЭ") {
      setFilteredStats(stats.filter((stat) => stat.direction === "КИТЭ"));
    } else if (direction === "МУИТ") {
      setFilteredStats(stats.filter((stat) => stat.direction === "МУИТ"));
    } else if (direction === "КОМТЕХНО") {
      setFilteredStats(stats.filter((stat) => stat.direction === "КОМТЕХНО"));
    } else {
      setFilteredStats(stats);
    }
  };

  const distributeStudents = () => {
    const distributed = {};
    filteredStats.forEach((stat) => {
      if (distributed[stat.direction]) {
        distributed[stat.direction].push(stat);
      } else {
        distributed[stat.direction] = [stat];
      }
    });
    return distributed;
  };

  const distributedStudents = distributeStudents();

  return (
    <div>
      <Container>
        <h2 className="static-puple__head">Статистика по Cтудентам:</h2>
        <p className="static-puple__desc">
          Количество зарегистрированных пользователей: {filteredStats.length}
        </p>
        <div className="button">
          <Button variant="primary" onClick={() => handleFilter("КИТЭ")}>
            Китэ
          </Button>{" "}
          <Button variant="primary" onClick={() => handleFilter("МУИТ")}>
            Муит
          </Button>{" "}
          <Button variant="primary" onClick={() => handleFilter("КОМТЕХНО")}>
            Комтехно
          </Button>{" "}
          <Button variant="secondary" onClick={() => handleFilter(null)}>
            Сбросить фильтр
          </Button>
        </div>
        <h3>Информация о студентах:</h3>
        <div className="static-flex">
          {Object.keys(distributedStudents).map((direction, index) => (
            <div key={index}>
              {distributedStudents[direction].map((student, idx) => (
                <div key={idx} className="static-item">
                  <p>Имя: {student.full_name}</p>
                  <p>Курс: {student.course}</p>
                  <p>Группа: {student.group}</p>
                  <p>Организация: {student.direction}</p>
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StaticPuple;
