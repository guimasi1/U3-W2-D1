import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class MyFooter extends Component {
  render() {return (
    <Card className="text-center">
      <Card.Header>Library Shop</Card.Header>
      <Card.Body>
        <Card.Title>Contact our assistance for more info</Card.Title>
        <Card.Text>
    Call the following number: 000 111 222 333  
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">All rights reserved</Card.Footer>
    </Card>
  );
  }
}

export default MyFooter;