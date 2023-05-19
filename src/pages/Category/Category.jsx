/* eslint-disable no-unused-vars */
import React from "react";
import {FaMusic,FaGuitar,FaDrumSteelpan} from "react-icons/fa";

import "./category.css";

import { BsPersonWorkspace } from "react-icons/bs";

const Category = () => {
  return (
    <div className="main-seller-container p-5">
      <h1 className="text-center p-5 text-black seller-title">Category</h1>
      <div className="seller-container row ">
        <div className="card">
          
          <FaMusic color="red" fontSize="4em" />
          <h1>Piano</h1>
        </div>
        <div className="card">
          <FaGuitar color="green" fontSize="4em" />
          <h1>Guitar</h1>
        </div>
        <div className="card">
          <FaDrumSteelpan color="purple" fontSize="4em" />
          <h1>Drums</h1>
        </div>
      
      </div>
    </div>
  );
};

export default Category;
