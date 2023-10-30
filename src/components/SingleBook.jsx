import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class SingleBook extends Component {
  render() {
    return (
      <Col key={this.props.singleElement.asin}>
        <Card
          className={`h-100 d-flex justify-content-between  ${
            this.props.singleElement.asin === this.props.selectedAsin
              ? "bg-secondary-subtle border border-4 border-danger"
              : ""
          }`}
        >
          <div>
            <Card.Img
              style={{ height: "270px" }}
              variant="top"
              src={this.props.singleElement.img}
              onClick={(e) => {
                this.props.changeSelectedAsin(this.props.singleElement.asin);
              }}
            />
            <Card.Title className="fs-6 px-2 text-center pt-1 text-nowrap text-truncate">
              {this.props.singleElement.title}
            </Card.Title>
          </div>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {this.props.singleElement.category.charAt(0).toUpperCase() +
                this.props.singleElement.category.slice(1)}
            </ListGroup.Item>
            <ListGroup.Item>{this.props.singleElement.price} $</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
