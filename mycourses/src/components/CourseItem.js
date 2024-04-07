import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import {  useDispatch } from "react-redux";
import { removeItem,increaseQuantity, decreaseQuantity } from "../control/cartSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const  dispatch=useDispatch();

  return (
    <div className="cartItem">
      <img src={img} alt=""></img>
      <div className="cartInfo">
        <h4>{title} </h4>
        <h4>{price} tl</h4>
        <div >
          <button className="cartQuantityButton" onClick={()=>dispatch(decreaseQuantity(id))} >
            <FaAngleDown />
          </button>
          <p>{quantity}</p>
          <button className="cartQuantityButton" onClick={()=>dispatch(increaseQuantity(id))}> 
            <FaAngleUp />
          </button>
        </div>
        <button className="removeButton" onClick={()=>dispatch(removeItem(id))}>Sil</button>
      </div>
    </div>
  );
};

export default CourseItem;
