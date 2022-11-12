import React from "react";
import classes from "../../styles/pages/Result.module.css";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  return (
    <div className={classes.result}>
      <Summary />
      <Analysis />
    </div>
  );
}
