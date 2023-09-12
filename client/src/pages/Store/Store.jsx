import React from "react";
import "./store.scss";
import { SHOP_DATA } from "../../shop-data";

const Store = () => {
  return (
    <div className="store">
      {SHOP_DATA.map((item) => (
        <div key={item.items.id}>
          <h2>{item.title}</h2>
          <div className="container">
            {item.items.map((data) => (
              <div className="product-card">
                <img src={data.imgUrl} alt="" />
                <div className="product-details">
                  <span className="name">{data.name}</span>
                  <span className="price">₹{data.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
