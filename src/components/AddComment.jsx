import { Component, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";
const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

const AddComment = ({ bookId, update }) => {
  // state = {
  //   singleComment: {
  //     comment: "",
  //     rate: "",
  //     elementId: this.props.bookId,
  //   },

  const [singleComment, setSingleComment] = useState({
    comment: "",
    rate: "",
    elementId: bookId,
  });
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.bookId !== this.props.bookId) {
  //       this.setState({...singleComment, elementId: this.props.bookId });
  //     }
  //   },
  // };

  useEffect(() => {
    setSingleComment({ ...singleComment, elementId: bookId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  const addComment = (e) => {
    // e.preventDefault();
    fetch(urlToUse, {
      method: "POST",
      body: JSON.stringify(singleComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("ok");
        } else {
          throw new Error("not ok");
        }
      })
      .catch((err) => {
        console.log(err, "errore");
        console.log(bookId);
        console.log(urlToUse + bookId);
      });

    setInputValue1("");
    setInputValue2("");
    update();
  };

  return (
    <Form>
      <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write your comment"
            value={inputValue1}
            onChange={(e) => {
              // this.setState({
              //   singleComment: {
              //     ...this.state.singleComment,
              //     comment: e.target.value,
              //   },
              // });

              setInputValue1(e.target.value);
              setSingleComment({ ...singleComment, comment: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            max={5}
            min={0}
            placeholder="Rating from 0 to 5"
            value={inputValue2}
            onChange={(e) => {
              // this.setState({
              //   singleComment: {
              //     ...this.state.singleComment,
              //     rate: e.target.value,
              //   },
              // });
              setInputValue2(e.target.value);

              setSingleComment({ ...singleComment, rate: e.target.value });
            }}
          />
        </Form.Group>
      </div>
      <div className="text-center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            addComment();
            update();
          }}
          className="btn-sm"
        >
          Add Comment
        </Button>
      </div>
    </Form>
  );
};

export default AddComment;
