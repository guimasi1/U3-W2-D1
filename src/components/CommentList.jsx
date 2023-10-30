import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    console.log(this.props.comments);
    return (
      // {console.log(this.props.comments)}

      <ListGroup>
        {this.props.comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
