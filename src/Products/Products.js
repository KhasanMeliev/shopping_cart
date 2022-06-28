import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleAdd = (productId, price) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { productId, price } });
  };
  const handleRemove = (productId, price) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { productId, price } });
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product_box" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="details">
            <h1>
              {product.name} {product.amount > 0 ? `- ${product.amount}` : ""}
            </h1>
          </div>
          <div className="price">
            <h2>{product.price} so'm</h2>
            {product.amount === 0 ? (
              <button onClick={() => handleAdd(product.id, product.price)}>
                Add to Cart
              </button>
            ) : (
              <div className="countAmount">
                <button onClick={() => handleRemove(product.id, product.price)}>
                  -
                </button>
                <p>{product.amount}</p>
                <button onClick={() => handleAdd(product.id, product.price)}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
