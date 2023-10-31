import { Component, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = ({ update, comments, updateState }) => {
  // state = {
  //   numberOfChanges: this.props.numberOfChanges,
  // };
  // const [numberOfChanges, setNumberOfChanges] = useState(numberOfChanges);

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.numberOfChanges !== this.state.numberOfChanges) {
  //     this.props.addChange();
  //   }
  // };

  useEffect(() => {
    console.log("sono nel commentlist");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateState]);

  return (
    <ListGroup className="mt-5">
      {comments.map((comment) => (
        <SingleComment key={comment._id} update={update} comment={comment} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
