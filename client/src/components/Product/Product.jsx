import React, { useState } from "react";
import "./product.scss";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import { addItem } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const { id, name, price, imgUrl } = product;
  const [showAlert, setShowAlert] = useState(false);
  const handleHideAlert = () => {
    setShowAlert(false);
  };

  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  

  const handleAddToCart = () => {
    const product = { id, name, price, imgUrl };
    dispatch(addItem(product));
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <div className="product" key={id}>
      <img src={imgUrl} alt={`${name}`} />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <button
        type="button"
        className="button add-to-cart"
        onClick={() => handleAddToCart(product)}
      >
        {isAdded ? "Added " : "Add to cart"}
      </button>
      {showAlert && (
        <Alert
          message="Please Sign In to add items to cart"
          onClose={handleHideAlert}
          alertType="error"
        />
      )}
    </div>
  );
};

export default Product;
