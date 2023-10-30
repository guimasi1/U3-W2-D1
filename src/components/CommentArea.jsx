import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner, Alert, Button } from "react-bootstrap";

const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    comments: [],
    bookId: this.props.bookId,
    spinnerState: false,
    errorState: false,
    numberOfChanges: 0,
  };

  addChange = () => {
    this.setState({ numberOfChanges: this.state.numberOfChanges + 1 });
    console.log("add change");
  };

  getSingleBook = () => {
    fetch(urlToUse + this.props.bookId, {
      headers: {
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("è andata a buon fine");

          return res.json();
        } else {
          this.setState({ errorState: true });
          throw new Error("non è andata a buon fine");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ comments: data });
        this.setState({ spinnerState: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleBook();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.bookId !== this.props.bookId) {
      this.getSingleBook();
    }
    if (prevState.numberOfChanges !== this.state.numberOfChanges) {
      console.log(prevState, "prevstate");
      this.getSingleBook();
    }
  }

  render() {
    return (
      <div>
        <div
          className={`text-center ${
            this.state.spinnerState ? "d-none" : "d-block"
          }`}
        >
          <Spinner />
        </div>
        {this.state.errorState && <Alert variant={"danger"}>Error </Alert>}
        <CommentList
          numberOfChanges={this.state.numberOfChanges}
          bookId={this.props.bookId}
          comments={this.state.comments}
          addChange={this.addChange}
        />
        <AddComment addChange={this.addChange} bookId={this.props.bookId} />
      </div>
    );
  }
}

export default CommentArea;
