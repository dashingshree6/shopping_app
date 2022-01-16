import React from "react";
import { Header, Icon } from "semantic-ui-react";

export default function AppHeader() {
  return (
    <div>
      <Header as="h2" icon>
        <Icon name="shopping bag" /> Shopping App
      </Header>
    </div>
  );
}
