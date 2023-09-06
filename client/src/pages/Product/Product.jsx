import React, { useState } from "react";
import "./product.scss";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://i.pinimg.com/564x/d6/98/40/d698409f4efc38f857b0017fbc4e2983.jpg",
    "https://i.pinimg.com/564x/e2/7f/72/e27f7295fd95193e1452b535d88a24e8.jpg",
  ];
  const navigate = useNavigate("/user");

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          in, aspernatur vero aliquid sapiente nulla laboriosam ratione
          molestiae hic voluptatum mollitia odio natus, asperiores omnis iste
          est dignissimos ipsa suscipit ducimus facere! Doloremque deserunt
          quasi iusto sit commodi, ipsum in.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <Link to={`/${navigate}`}>
          <button className="add">
            <i className="fa-solid fa-cart-plus"></i>
            add to cart
          </button>
        </Link>

        <div className="links">
          <div className="item">
            add to wishlist
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="item">
            add to compare
            <i className="fa-solid fa-scale-balanced"></i>
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
