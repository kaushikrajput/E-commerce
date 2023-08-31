import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/b7/9d/4c/b79d4c3e6cd33900d22321c294e409bd.jpg",
      img2: "https://i.pinimg.com/564x/73/3d/c9/733dc9794854749d0772fe88d519b0c5.jpg",
      title: "Pants",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/34/56/7e/34567e7b799dccac642d9a4cea8c9fdd.jpg",
      title: "Sweatshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/b8/73/14/b873142282b09b2b8a5554f01d605c61.jpg",
      title: "Sweatshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/4e/7d/1f/4e7d1f3e6456d3648fc0c1268ffdf99f.jpg",
      title: "Turtle Neck",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque natus
          eum consequatur adipisci nostrum eos, qui quidem quaerat architecto
          voluptatibus, accusantium quod illum reprehenderit molestiae, neque
          iure veniam rem vel.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
