import React from "react";
import logo from "../../assets/images/logo-bg.png";
import classes from "../../styles/navbar/Brand.module.css";

export default function Brand() {
  return (
    <ul>
      <li>
        <a href="index.html" className={classes.brand}>
          <img src={logo} alt="Logo" />
          <h3>Programming Fun Quiz</h3>
        </a>
      </li>
    </ul>
  );
}
