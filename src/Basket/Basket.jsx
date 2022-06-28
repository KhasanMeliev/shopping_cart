import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
const Basket = () => {
  const products = useSelector((state) => state.products);
  const sum = useSelector((state) => state.sum);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };

  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <div className="container" id="basket">
      <div className="up">
        <h1>BASKET</h1>
      </div>
      {products.map((prod) => (
        <>
          {prod.amount === 0 ? (
            ""
          ) : (
            <div className="box" key={prod.id}>
              <div className="name_img">
                <img src={prod.img} alt={prod.name} />
                <p>{prod.name}</p>
              </div>
              <div className="price">
                <div className="count">
                  <button onClick={() => handleRemove(prod.id, prod.price)}>
                    -
                  </button>
                  <p>{prod.amount}</p>
                  <button onClick={() => handleAdd(prod.id, prod.price)}>
                    +
                  </button>
                </div>
                <h1>{prod.price} - so'm</h1>
              </div>
            </div>
          )}
        </>
      ))}
      <div className="totalPrice">
        <h1>Total Price - {sum} so'm </h1>
        <button>
          {sum === 0 ? "Biror narsa harid qiling" : "Buyurtma berish"}
        </button>
      </div>
    </div>
  );
};

export default Basket;
