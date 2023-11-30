import React from "react";
import { useNavigate } from "react-router-dom";
import { SHOP_DATA } from "../../shop-data";
import "./storeItems.scss";
import Product from "../Product/Product";

const StoreItems = ({ title }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/category/${title.toLowerCase()}`);
  };

  return (
    <div className="store-items">
      {SHOP_DATA.map((item) => (
        <div key={item.id} className="item-category">
          <div className="link" onClick={onClickHandler}>
            <h2>{item.title}</h2>
          </div>
          <div className="container">
            {item.items
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreItems;
