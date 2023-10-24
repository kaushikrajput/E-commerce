import React from "react";
import "./store.scss";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Store = ({ title }) => {
  return (
    <div className="store">
      <CategoryPreview title={title} />
    </div>
  );
};

export default Store;
