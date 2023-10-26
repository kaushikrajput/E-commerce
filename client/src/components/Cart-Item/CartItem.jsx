import React from "react";
import "./cartItem.scss";
import { useDispatch } from "react-redux";
import { removeItem } from "../../slices/cartSlice";

const CartItem = ({ cartItem }) => {
  const {id, name, price, imgUrl, quantity } = cartItem;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="checkout">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
      <span className="title">{name}</span>
      <div className="quantity">
        <span className="arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>
      <div className="price">₹{price}</div>
      <div className="remove-btn" onClick={handleRemove}>
        ✕
      </div>
    </div>
  );
};

export default CartItem;
