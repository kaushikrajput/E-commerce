import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Women",
      imgUrl: "https://images.pexels.com/photos/2036650/pexels-photo-2036650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Men",
      imgUrl: "https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Sale",
      imgUrl: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Accessories",
      imgUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Sneakers",
      imgUrl: "https://images.pexels.com/photos/6630581/pexels-photo-6630581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // {
    //   id: 6,
    //   title: "New Season",
    //   imgUrl: "https://images.pexels.com/photos/18063988/pexels-photo-18063988/free-photo-of-a-couple-holding-hands-and-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // },
  ];
  return (
    <div className="home">
      <Directory categories={categories} />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
