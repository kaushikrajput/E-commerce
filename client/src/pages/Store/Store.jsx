import React from "react";
import "./store.scss";
import StoreItems from "../../components/Store-Items/StoreItems";

const Store = ({ title }) => {
  return (
    <div className="store">
      <StoreItems title={title} />
    </div>
  );
};

export default Store;
