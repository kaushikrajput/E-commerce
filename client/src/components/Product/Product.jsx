import React from "react";
import "./product.scss";

const Product = ({ product }) => {
  const { name, price, imgUrl } = product;
  return (
    <div className="product">
      <img src={imgUrl} alt={`${name}`} />
      <div className="product-details">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <button className="button" >Add to cart</button>
    </div>
  );
};

export default Product;
