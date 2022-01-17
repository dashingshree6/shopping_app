import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";

export default function ProductList() {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  });
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
}
