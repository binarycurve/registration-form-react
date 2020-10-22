import React from "react";
import { Container, Row, Col } from "reactstrap";
import Register from "./components/register/RegisterComponent";
import Header from "./components/shared/header/HeaderComponent";
import Footer from "./components/shared/footer/FooterComponent";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Register />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
