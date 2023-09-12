import React from "react";
import "./featuredProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/47/b5/77/47b577b76462525fb29ebbc1a61f7b4b.jpg",
      img2: "https://i.pinimg.com/564x/54/51/81/5451813888c2a1579c106b0426a90531.jpg",
      title: "Floral Suits",
      
      isNew: true,
      oldPrice: 2299,
      price: 1899,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/db/a8/ac/dba8ac8ff2746c0c428e3903a46d817b.jpg",
      title: "Sweatshirt",
      isNew: true,
      oldPrice: 1699,
      price: 1299,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/f9/ea/66/f9ea66704f21041d6c894d706329eb7b.jpg",
      title: "Puffer jacket",
      isNew: true,
      oldPrice: 1799,
      price: 1399,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/05/46/91/0546919a9bb143649cc7726d7d8f3b5e.jpg",
      title: "Turtle Neck",
      isNew: true,
      oldPrice: 1699,
      price: 1499,
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
