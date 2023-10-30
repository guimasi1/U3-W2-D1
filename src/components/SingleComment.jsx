import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";
class SingleComment extends Component {
  //   getSingleBook = () => {
  //     fetch(urlToUse + this.props.bookId, {
  //       headers: {
  //         Authorization: authorizationKey,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log("è andata a buon fine");

  //           return res.json();
  //         } else {
  //           throw new Error("non è andata a buon fine");
  //         }
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         this.setState({ comments: data });
  //         console.log(this.props.bookId);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  deleteComment = () => {
    fetch(urlToUse + this.props.comment._id, {
      method: "DELETE",
      headers: {
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("ok");
        } else {
          throw new Error("errore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <ListGroup.Item key={this.props.comment._id}>
        <div className="d-flex justify-content-between ">
          <div className="d-flex align-items-center ">
            {this.props.comment.comment}
          </div>
          <div>
            <Button
              className="btn-sm btn-danger"
              onClick={() => {
                this.deleteComment();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </ListGroup.Item>
    );
    // return <ListGroup.Item>this.props.comment</ListGroup.Item>;
  }
}

export default SingleComment;
