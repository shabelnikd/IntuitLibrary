import React, {useEffect, useState} from "react";
import "../styles/Static.css";
import {Sheet, Table} from "@mui/joy";
import axios from "axios";
import {baseApi} from "../api";
import {Link} from "react-router-dom";

const StaticTeach = () => {
  const [sortBy, setSortBy] = useState("books_count"); // Сортировка по умолчанию
  const [sortOrder, setSortOrder] = useState("desc");
  const [tableData, setTableData] = useState([]);

  const handleSortByColumn = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  useEffect(() => {
    axios
      .get(`${baseApi}/accounts/stats/`)
      .then((res) => {
        let sortedData = [...res.data]; // Создаем копию данных

        sortedData.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
            return sortOrder === "asc" ? -1 : 1;
          } else if (a[sortBy] > b[sortBy]) {
            return sortOrder === "asc" ? 1 : -1;
          } else {
            return 0;
          }
        });

        setTableData(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, sortOrder]);

  return (
    <Sheet variant="soft">
      <Table
        aria-label="basic table"
        variant="soft"
        stripe="odd"
        color="primary"
        borderAxis="y"
        size="lg"
      >
        <thead>
          <tr>
            <th style={{ width: "4%", textAlign: "center" }}>№</th>
            <th>ФИО</th>
            <th className="display-none" style={{ overflow: "hidden" }}>Email</th>
            <th>
              <button
                style={{ background: "transparent", borderWidth: "0px" }}
                onClick={() => handleSortByColumn("books_count")}
              >
                Количество книг{" "}
                {sortBy === "books_count" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </th>
          </tr>
        </thead>
        {tableData && (
          <tbody>
            {tableData.map((user, index) => (
              <tr key={user.id}>
                <td style={{ textAlign: "center", overflow: "hidden" }}>
                  {index + 1}
                </td>
                <td>
                  <Link className="author__link" to={`/author/${user.id}`}>{user.full_name}</Link>
                </td>
                <td className="display-none" style={{ overflow: "hidden" }}>{user.email}</td>
                <td>{user.books_count}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </Sheet>
  );
};

export default StaticTeach;
