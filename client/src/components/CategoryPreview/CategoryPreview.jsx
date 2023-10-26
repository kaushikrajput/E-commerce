import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SHOP_DATA } from "../../shop-data";
import "./categoryPreview.scss";
import Product from "../Product/Product";

const CategoryPrevirew = ({ title }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/category/${title.toLowerCase()}`);
  };

  return (
    <div className="category-preview">
      {SHOP_DATA.map((item) => (
        <div key={item.id}>
          <div className="link" onClick={onClickHandler}>
            <h2>{item.title}</h2>
          </div>
          <div className="container">
            {item.items
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <Product product={product} key={product.id}/>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPrevirew;
