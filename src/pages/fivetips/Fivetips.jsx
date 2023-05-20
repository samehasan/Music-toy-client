/* eslint-disable no-unused-vars */
import React from "react";


import "./Fivetips.css";

import { BsPersonWorkspace } from "react-icons/bs";

const Fivetips = () => {
  return (
    <div className="main-seller-container msc p-5">
      <h1 className="text-center p-5 text-black seller-title">Baby Play Tips</h1>
      <div className="seller-container row ">
        <div className="card bcrd">
          
         
          <h3>Follow Their Lead:</h3>
          <h5> Pay attention to your baby's cues and interests during playtime.</h5>
        </div>
        <div className="card bcrd">
         
          <h3>Use Age-Appropriate Toys:</h3>
          <h5>Choose toys that are suitable for your baby's age and developmental level. </h5>
        </div>
        <div className="card bcrd">
         
          <h3>Encourage Social Interaction:</h3>
          <h5>Engage in interactive play with your baby to promote social and emotional development.</h5>
        </div>
      
      </div>
    </div>
  );
};

export default Fivetips;
