import { Component } from "react";

import FantasyBooks from "../books/fantasy.json";
import HistoryBooks from "../books/history.json";
import HorrorBooks from "../books/horror.json";
import RomanceBooks from "../books/romance.json";
import ScifiBooks from "../books/scifi.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

class AllTheBooks extends Component {
  state = {
    selectedCategory: FantasyBooks,
  };

  render() {
    const changeCategory = (categoryOfBooks) => {
      this.setState({
        selectedCategory: categoryOfBooks,
      });
    };

    return (
      <Container>
        <Row>
          <Col className="d-flex gap-3 justify-content-center">
            <Button
              onClick={() => {
                changeCategory(FantasyBooks);
              }}
            >
              Fantasy
            </Button>
            <Button
              onClick={() => {
                changeCategory(HistoryBooks);
              }}
            >
              History
            </Button>
            <Button
              onClick={() => {
                changeCategory(HorrorBooks);
              }}
            >
              Horror
            </Button>
            <Button
              onClick={() => {
                changeCategory(RomanceBooks);
              }}
            >
              Romance
            </Button>
            <Button
              onClick={() => {
                changeCategory(ScifiBooks);
              }}
            >
              Sci-Fi
            </Button>
          </Col>
        </Row>
        <Row className="g-2 mt-3" xs={2} md={6} lg={8}>
          {this.state.selectedCategory.map((book) => {
            return (
              <Col key={book.asin}>
                <Card className="h-100 d-flex justify-content-between ">
                  <div>
                    <Card.Img
                      className="h-75"
                      style={{ height: "150px" }}
                      variant="top"
                      src={book.img}
                    />
                    <Card.Title className="fs-6 px-2 text-center pt-1 text-nowrap text-truncate">
                      {book.title}
                    </Card.Title>
                  </div>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      {book.category.charAt(0).toUpperCase() +
                        book.category.slice(1)}
                    </ListGroup.Item>
                    <ListGroup.Item>{book.price} $</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
