import React from "react";
import classes from "../styles/Question.module.css";
import Options from "./Options";

export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        How Can We Declare a JavaScript Variable?
      </div>
      <Options />
    </div>
  );
}
