import React from "react";
import "./list.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/47/b5/77/47b577b76462525fb29ebbc1a61f7b4b.jpg",
      img2: "https://i.pinimg.com/564x/54/51/81/5451813888c2a1579c106b0426a90531.jpg",
      title: "Pants",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/f9/ea/66/f9ea66704f21041d6c894d706329eb7b.jpg",
      title: "Sweatshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/db/a8/ac/dba8ac8ff2746c0c428e3903a46d817b.jpg",
      title: "Sweatshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/ef/52/86/ef528617d3ce52c0b0c014c18f887485.jpg",
      title: "Turtle Neck",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
