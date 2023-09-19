import React, { useContext } from "react";
import "./category.scss";
import Product from "../../components/Product/Product";
import { SHOP_DATA } from "../../shop-data";
import { useLocation } from "react-router-dom";

const Category = () => {
  const { pathname } = useLocation();
  const urlVal = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div className="category">
      {SHOP_DATA.filter((item) =>
        urlVal === "store" ? true : item.title === urlVal
      ).map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div className="container">
            {item.items.map((product) => (
              <Product product={product}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
