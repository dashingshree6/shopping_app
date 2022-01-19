import React from "react";
import { useSelector } from "react-redux";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function Product() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
        <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>{category}</Card.Meta>
            <Card.Description>${price}</Card.Description>
          </Card.Content>
        </Card>
        </Link>
      </div>
    );
  });
  return <div>{renderList}</div>;
}
