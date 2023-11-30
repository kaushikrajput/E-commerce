import React from "react";
import "./cartItem.scss";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../slices/cartSlice";

const CartItem = ({ cartItem }) => {
  const { id, name, price, imgUrl, quantity } = cartItem;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  const incrementItem = (id) => {
    dispatch(incrementQuantity(id));
  };
  const decrementItem = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="cart">
      <div className="image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="title">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => decrementItem(cartItem)}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => incrementItem(cartItem)}>
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
