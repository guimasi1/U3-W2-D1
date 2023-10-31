import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Spinner, Alert } from "react-bootstrap";

const authorizationKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGU1MmY2ZTNkZDAwMTQ5NWU0MzYiLCJpYXQiOjE2OTgzMTk5NTQsImV4cCI6MTY5OTUyOTU1NH0._5f7a5FHV9rodonlw7xUBbjbAQ2k8EBEY3C8vROpRfQ";

const urlToUse = "https://striveschool-api.herokuapp.com/api/comments/";

function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [updateState, setUpdateState] = useState(0);

  const update = () => {
    setUpdateState(updateState + 1);
    getSingleBook();
  };

  const getSingleBook = () => {
    fetch(urlToUse + bookId, {
      headers: {
        Authorization: authorizationKey,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("è andata a buon fine");
          return res.json();
        } else {
          setErrorState(true);
          throw new Error("non è andata a buon fine");
        }
      })
      .then((data) => {
        console.log(data);
        setComments(data);
        setSpinnerState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getSingleBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateState]);

  useEffect(() => {
    getSingleBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  return (
    <div>
      <div className={`text-center ${spinnerState ? "d-none" : "d-block"}`}>
        <Spinner />
      </div>
      {errorState && <Alert variant={"danger"}>Error </Alert>}
      <CommentList
        update={update}
        updateState={updateState}
        bookId={bookId}
        comments={comments}
      />
      <AddComment update={update} bookId={bookId} />
    </div>
  );
}

export default CommentArea;
