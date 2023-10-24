import React from "react";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Directory from "../../components/Directory/Directory";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Women",
      imgUrl:
        "https://i.pinimg.com/564x/90/45/2d/90452d1fa41bdae475bb565cc6fd393d.jpg",
    },
    {
      id: 2,
      title: "Men",
      imgUrl:
        "https://i.pinimg.com/564x/32/28/0d/32280d3df84ce6563a0facea8888a64a.jpg",
    },
    {
      id: 3,
      title: "Accessories",
      imgUrl:
        "https://i.pinimg.com/564x/6a/52/25/6a5225dd36f5bd9760f8d9a5ab931e84.jpg",
    },
    {
      id: 4,
      title: "Perfumes",
      imgUrl:
        "https://i.pinimg.com/564x/0d/d5/58/0dd5580101c1ce5df7b1884f3bcbb03f.jpg",
    },
    {
      id: 5,
      title: "Sneakers",
      imgUrl:
        "https://images.pexels.com/photos/6630581/pexels-photo-6630581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="home">
      <Directory categories={categories} />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
