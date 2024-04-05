import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navbar = () => {
    const {quantity} =useSelector((store)=>store.cart)
    console.log(quantity)
  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="navDiv">
          <div className="counter">
            <p>{quantity}</p>
          </div>

          <FaShoppingBasket className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
