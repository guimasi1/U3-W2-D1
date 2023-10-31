import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import Booklist from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";
// import FantasyBooks from "./books/fantasy.json";

function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      <Booklist />
      {/* <Booklist arrayOfBooks={FantasyBooks} /> */}
      <MyFooter />
    </div>
  );
}

export default App;
