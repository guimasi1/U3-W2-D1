import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Welcome extends Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col>
            <Alert variant="success">
              <Alert.Heading className="fw-bold">Welcome</Alert.Heading>
              <p>
                Hi, this is your next favourite online-library. You can shop any
                book you wany for the best prices available.
              </p>
              <hr />
              <p className="mb-0">
                Just start to search your next favourite book!
              </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
