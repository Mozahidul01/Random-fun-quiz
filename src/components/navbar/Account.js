import React from "react";
import classes from "../../styles/navbar/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        {" "}
        account_circle{" "}
      </span>
      <a href="signup.html" className={classes.signup}>
        Signup
      </a>
      {/* <span className="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </span> */}
    </div>
  );
}
