import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";

import { clearCart, listItem } from "../control/cartSlice";
const CourseList = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  return (
    <>
      {quantity < 1 ? (
        <section className="sectionItem">
          <header>
            <h2>Sepetim</h2>
            <h4> Bomboş</h4>
            <button className="listButton" onClick={()=>dispatch(listItem())} >Geri Getir</button>
          </header>
        </section>
      ) : (
        <section className="sectionItem">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>

          <footer>
            <hr></hr>
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>

            <button
              className="clearButton"
              onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
