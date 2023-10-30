import React, { Component } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import HistoryBooks from "../books/history.json";
import HorrorBooks from "../books/horror.json";
import RomanceBooks from "../books/romance.json";
import ScifiBooks from "../books/scifi.json";
import FantasyBooks from "../books/fantasy.json";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    researchValue: "",
    selectedCategory: FantasyBooks,
    selectedAsin: "",
  };

  changeSelectedAsin = (newAsin) => {
    this.setState({ selectedAsin: newAsin });
  };

  render() {
    const changeCategory = (categoryOfBooks) => {
      this.setState({ ...this.state, selectedCategory: categoryOfBooks });
    };
    return (
      <Container className="mb-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="d-block text-center">Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search for your favourite book"
              value={this.state.researchValue}
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  researchValue: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
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
        <Row>
          <Col xs={10}>
            <Row xs={2} md={5} lg={6} className="mt-5 g-3 ">
              {this.state.selectedCategory
                .filter((book) =>
                  book.title
                    .toLowerCase()
                    .includes(this.state.researchValue.toLowerCase())
                )
                .map((book) => (
                  <SingleBook
                    changeSelectedAsin={this.changeSelectedAsin}
                    key={book.asin}
                    singleElement={book}
                    selectedAsin={this.state.selectedAsin}
                  />
                ))}
            </Row>
          </Col>
          <Col xs={2}>
            <CommentArea bookId={this.state.selectedAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
