/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Toy = ({ toy }) => {
  const {
    title,
    price,
    deadline,
    description,
    seller,
    status,
    image,
    skills,
    rating,
  } = toy || {};
  return (
    <div className="Toy col-md-12 col-sm-12 col-lg-6 ">
      <div className="row d-flex justify-content-center align-items-center single-card">
        <div className="col-md-4">
          <img
            className="w-100"
            src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="col-md-8 card-right">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="all-skils d-flex  flex-wrap justify-content-around align-items-center">
            {skills?.map((skill) => (
              <button className="bg-dark text-white p-1">{skill?.value}</button>
            ))}
          </div>
          <div className="card-footer text-start p-4 mt-3 d-flex justify-content-between ">
            <div className="div">price: {price} BDT</div>
            {/* <div>Deadline: {deadline}</div> */}
          </div>
          <div className="d-flex justify-content-around">
            <p>rating:{rating}</p>
            {/* <p>Category: {seller}</p> */}
          </div>
          <div className="text-end">
            <button>
              View Details 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
