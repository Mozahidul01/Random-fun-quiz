import React from "react";
import thumb from "../assets/images/3.jpg";
import classes from "../styles/SingleVideo.module.css";

export default function singleVideo() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={thumb} alt="" />
        <p>Fun with JavaScript</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
