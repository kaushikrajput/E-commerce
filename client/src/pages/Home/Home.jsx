import React, { useState, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* <Slider /> */}
      {/* <FeaturedProducts type="trending" /> */}
      <Categories />
      <FeaturedProducts type="featured" />
    </div>
  );
};

export default Home;
