import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SingleBook = ({ singleElement }) => {
  return (
    <Col key={singleElement.asin}>
      <Card className="h-100 d-flex justify-content-between ">
        <div>
          <Card.Img
            className="h-75"
            style={{ height: "150px" }}
            variant="top"
            src={singleElement.img}
          />
          <Card.Title className="fs-6 px-2 text-center pt-1 text-nowrap text-truncate">
            {singleElement.title}
          </Card.Title>
        </div>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {singleElement.category.charAt(0).toUpperCase() +
              singleElement.category.slice(1)}
          </ListGroup.Item>
          <ListGroup.Item>{singleElement.price} $</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default SingleBook;
