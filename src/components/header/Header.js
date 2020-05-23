import React from "react";
import "./Header.module.css";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.h1}>MyReads</h1>
    </div>
  );
}

export default Header;
