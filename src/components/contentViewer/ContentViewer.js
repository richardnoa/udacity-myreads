import React from "react";
import classes from "./ContentViewer.module.css";
import BooksList from "../booksList/BooksList";

function ContentViewer(props) {
  return (
    <div>
      <h2 className={classes.title}>{props.status}</h2>
      <BooksList books ={props.books}/>
    </div>
  );
}

export default ContentViewer;
