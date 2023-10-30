import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    numberOfChanges: this.props.numberOfChanges,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.numberOfChanges !== this.state.numberOfChanges) {
      this.props.addChange();
    }
  };

  render() {
    console.log(this.props.comments);
    return (
      // {console.log(this.props.comments)}

      <ListGroup className="mt-5">
        {this.props.comments.map((comment) => (
          <SingleComment
            addChange={this.props.addChange}
            key={comment._id}
            comment={comment}
          />
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
