import React from "react";
import classes from "../../styles/pages/Quiz.module.css";
import MiniPlayer from "../MiniPlayer";
import Options from "../Options";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  return (
    <div className={classes.quiz}>
      <h1>How Can We Declare a JavaScript Variable?</h1>
      <h4>Question can have multiple answers</h4>
      <Options />
      <ProgressBar />
      <MiniPlayer />
    </div>
  );
}
