/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import "./MyToys.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [Toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user, control]);
  const handleSearch = () => {
    fetch(`http://localhost:5000/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
  };

  return (
    <div>
      <div className="my-Toys-container">
        <h1 className="text-center p-4 ">ALL My Toys</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />{" "}
          <button onClick={handleSearch}>Search</button>
        </div>
        <Table striped bordered hover className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Toys?.map((Toy, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{Toy.title}</td>
                <td>{Toy.category}</td>
                <td>{Toy.rating}</td>
                <td>{Toy.price}</td>
                <td>
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit
                  </Button>
                  <UpdateToyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    Toy={Toy}
                    handleToyUpdate={handleToyUpdate}
                  />
                </td>
                <td>
                  {" "}
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyToys;
