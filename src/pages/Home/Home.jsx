/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Toys from "../Toys/Toys";
import Fivetips from "../fivetips/Fivetips";
import useTitle from "../../hooks/usetitle";

const Home = () => {
  useTitle('Home-MusicToys');
  const [servicesData, setServicesData] = useState([]);

  return (
    <div>
      <Banner></Banner>
     
      <Category></Category>
      <Toys></Toys>
      <Fivetips></Fivetips>
    </div>
  );
};

export default Home;
