import { Container, Row, Col } from "react-bootstrap";
import Navbar from "components/Navbar";


import React from "react";

export default ({ children }) => {
  return (
    <Container>
        <Navbar />
        <div>{children}</div>
    </Container>
  );
};
