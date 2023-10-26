import React from "react";
import "./cart.scss";
import { useSelector } from "react-redux";
import CartItem from "../../components/Cart-Item/CartItem";
import { Link } from "react-router-dom";
import { selectTotal } from "../../slices/cartSlice";

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cartReducer);
  console.log(cartItem);


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
        <div className="cart">
          <div className="container">
            <div className="checkout-header">
              <p>Product</p>
              <p>Description</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Remove</p>
            </div>
            {cartItem?.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <div className="total-ammount">Total</div>
        </div>
      )}
    </>
  );
};

export default Cart;
