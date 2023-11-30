import React from "react";
import "./checkout.scss";
import { useSelector } from "react-redux";
import CartItem from "../../components/Cart-Item/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cartReducer);

  const getTotal = cartItem.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

 
  return (
    <>
      {CartItem?.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <Link className="link" to="/store">
            <button className="button">shop now</button>
          </Link>
        </div>
      ) : (
        <div className="checkout">
          <div className="checkout-header">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove</p>
          </div>
          {cartItem?.map((item, id) => (
            <CartItem cartItem={item} key={id} />
          ))}
          <div className="total-ammount">Total : {getTotal}</div>
        </div>
      )}
    </>
  );
};

export default Cart;
