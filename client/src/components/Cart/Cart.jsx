import React from "react";
import "./cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/d6/98/40/d698409f4efc38f857b0017fbc4e2983.jpg",
      title: "Pants",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architect nihil voluptatem quisquam libero illo eligendi repellat nemo dolorem laboriosam veniam.",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          {/* <img src="" alt="" /> */}
          <div className="details">
            <h1>Nothing in your cart</h1>
            <p></p>
            <div className="price"></div>
          </div>
          <div className="delete">
            {/* <i class="fa-solid fa-trash"></i> */}
          </div>
        </div>
      ))}
      <div className="total"></div>
    </div>
  );
};

export default Cart;
