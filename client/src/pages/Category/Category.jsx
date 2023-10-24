import React from "react";
import "./category.scss";
import Product from "../../components/Product/Product";
import { SHOP_DATA } from "../../shop-data";
import { useLocation } from "react-router-dom";

const Category = () => {
  const { pathname } = useLocation();
  const urlVal = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div className="category">
      {SHOP_DATA.filter((item) => item.title === urlVal).map((item,index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <div className="container">
            {item.items.map((product,index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
