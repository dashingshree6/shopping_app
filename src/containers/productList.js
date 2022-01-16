import React from "react";
import { Header } from "semantic-ui-react";
import { useSelector } from "react";

export default function ProductList() {
  const products = useSelector((state) => state);
  return <div>Product List</div>;
}
