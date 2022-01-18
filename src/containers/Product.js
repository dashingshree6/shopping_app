import React from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div className="four column wide" key={id}>
        <div className="ui link card">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price"> $ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <renderList />
    </div>
  );
}
