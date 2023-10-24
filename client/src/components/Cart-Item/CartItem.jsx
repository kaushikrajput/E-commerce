import React from "react";
import "./cartItem.scss";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="container">
        <img src={item.imgUrl} alt="" />
        <h2>{item.title}</h2>
      </div>
    </div>
  );
};

export default CartItem;
