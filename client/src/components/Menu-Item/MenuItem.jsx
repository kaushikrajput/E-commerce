import React from "react";
import "./menuItem.scss";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ category }) => {
  const {title, imgUrl,size } = category;

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/category/${title.toLowerCase()}`);
  };
  return (
    <div className={`${size} menu-item`} >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content" onClick={onClickHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default MenuItem;
