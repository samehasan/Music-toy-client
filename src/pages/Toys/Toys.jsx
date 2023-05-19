/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Toys.css";
import { FaArrowRight } from "react-icons/fa";
import Toy from "../Toy/Toy";

const Toys = () => {
 
  const [Toys, setToy] = useState([]);
  const [activeTab, setActiveTab] = useState("ahghf");

  useEffect(() => {
    fetch(`http://localhost:5000/allToysByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <h1 className="title text-center mt-5 p-5">Shop By Category</h1>
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("Piano")}
              className={`tab  tab2 Piano ${
                activeTab == "Piano" ? " bg-warning text-dark" : ""
              }`}
            >
              Piano
            </div>
            <div
              onClick={() => handleTabClick("Guitar")}
              className={`tab  tab2 Guitar ${
                activeTab == "Guitar" ? " bg-success text-white" : ""
              }`}
            >
              Guitar
            </div>
            <div
              onClick={() => handleTabClick("Drums")}
              className={`tab  tab2 Drums ${
                activeTab == "Drums" ? " bg-primary text-white" : ""
              }`}
            >
              Drums
            </div>
          </div>
        </div>
      </div>
      <div className="Toys-container mt-5 row">
        {Toys?.map((toy) => (
          <Toy toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default Toys;
