import React from "react";
import "./store.scss";
import { SHOP_DATA } from "../../shop-data";
import { useLocation } from "react-router-dom";

const Store = () => {
  const { pathname } = useLocation();
  const urlVal = pathname.split("/")[pathname.split("/").length - 1];
  return (
    <div className="store">
      {SHOP_DATA.map((item) => (
        <div key={item.id}>
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
