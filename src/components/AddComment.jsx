import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";
const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

class AddComment extends Component {
  state = {
    singleComment: {
      comment: "",
      rate: "",
      elementId: this.props.bookId,
    },

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.bookId !== this.props.bookId) {
        this.setState({ elementId: this.props.bookId });
      }
    },
  };

  addComment = () => {
    fetch(urlToUse, {
      method: "POST",
      body: JSON.stringify(this.state.singleComment),
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
        console.log(this.props.bookId);
        console.log(urlToUse + this.props.bookId);
      });
  };

  render() {
    return (
      <Form>
        <div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write your comment"
              onChange={(e) => {
                this.setState({
                  singleComment: {
                    ...this.state.singleComment,
                    comment: e.target.value,
                  },
                });
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
              onChange={(e) => {
                this.setState({
                  singleComment: {
                    ...this.state.singleComment,
                    rate: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
        </div>
        <div className="text-center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              this.addComment();
            }}
            className="btn-sm"
          >
            Add Comment
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddComment;
