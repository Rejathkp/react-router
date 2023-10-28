import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NewwContext } from "../App3";
import "./Table.css";
import { AiFillEye, AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";

function Table2() {
  const [student, setStudent] = useContext(NewwContext);

  const handleDelete = (ind) => {
    const list = student.filter((_,row) => row !== ind);
    setStudent(list);
  };
  return (
    <div className="table-wrapper">
      <Table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th className="expand">COURSE</th>
            <th>AGE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item, ind) => {
            return (
              <tr >
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.age}</td>
                <td>
                  <Link to={`/view/${ind}`}>
                    <Button variant="success">
                      <AiFillEye /> View
                    </Button>
                  </Link>

                  <Link to={`/edit/${ind}`}>
                    <Button variant="primary">
                      <AiOutlineEdit /> Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(ind)}
                  >
                    <AiOutlineDelete /> Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="text-center">
        <Link to={`/create`}>
          <Button variant="primary" className="center">
            <AiOutlinePlus /> Add
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Table2;
