/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Toys from "../Toys/Toys";

const Home = () => {
  const [servicesData, setServicesData] = useState([]);

  return (
    <div>
      <Banner></Banner>
      <div>
        hi
      </div>
      <Category></Category>
      <Toys></Toys>
    </div>
  );
};

export default Home;
