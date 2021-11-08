import { Container, Row, Col } from "react-bootstrap";
import Navbar from "components/Navbar";

import React from "react";

export const LayOut = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
    </Container>
  );
};

export default LayOut;
