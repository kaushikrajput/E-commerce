import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import CartItem from "../Cart-Item/cartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <>
      {cart?.length > 0 ? (
        <div className="cart">
          <div className="container">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove</p>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="total-ammount"></div>
        </div>
      ) : (
        <>
          <div className="empty-cart">
            <h2>Your cart is empty!</h2>
            <Link className="link" to="/store">
              <button className="button">shop now</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
