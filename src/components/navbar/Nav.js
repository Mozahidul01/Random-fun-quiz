import React from "react";
import classes from "../../styles/navbar/Nav.module.css";
import Account from "./Account";
import Brand from "./Brand";

export default function Nav() {
  return (
    <div className={classes.nav}>
      <Brand />
      <Account />
    </div>
  );
}
