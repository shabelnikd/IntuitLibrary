import React, {useEffect, useState} from "react";
import "../styles/Static.css";
import {Sheet, Table} from "@mui/joy";
import axios from "axios";
import {baseApi} from "../api";
import {Link, useParams} from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const StaticBook = () => {
  const { bookId } = useParams();
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    axios
      .get(`${baseApi}/books/${bookId}/`)
      .then((res) => {
        let sortedData = [...res.data['stats']]; // Создаем копию данных
        setTableData(sortedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bookId]);

  console.log(tableData)

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
          <th>ФИО</th>
          <th>Группа</th>
          <th className="display-none" style={{overflow: "hidden"}}>Учереждение</th>
          <th className="display-none" style={{overflow: "hidden"}}>Курс</th>
          <th>
            <button
                style={{background: "transparent", borderWidth: "0px"}}
            >
              Просмотрено{" "}
            </button>
          </th>
          <th>
            <button
                style={{background: "transparent", borderWidth: "0px"}}
            >
              Скачано{" "}
            </button>
          </th>
        </tr>
        </thead>
        {tableData && (
            <tbody>
            {tableData.map((user, index) => (
                <tr key={user.id}>
                  <td style={{overflow: "hidden"}}>
                    {user.user.full_name}
                  </td>
                  <td style={{overflow: "hidden"}}>
                    {user.user['group']}
                  </td>
                  <td className="display-none" style={{overflow: "hidden"}}>
                    {user.user.direction}
                  </td>
                  <td className="display-none" style={{overflow: "hidden"}}>
                    {user.user.course}
                  </td>
                  <td>{user.is_view ? <CheckIcon/> : <ClearIcon/>}</td>
                  <td>{user.is_down ? <CheckIcon/> : <ClearIcon/>}</td>
                </tr>
            ))}
            </tbody>
        )}
      </Table>
    </Sheet>
  );
};

export default StaticBook;
