import React from "react";
import thumb from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>close</span>
      <img src={thumb} alt="thumb" />
      <p>Fun with JavaScript</p>
    </div>
  );
}
