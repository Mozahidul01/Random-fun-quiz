import React from "react";
import signupImg from "../../assets/images/signup.svg";
import classes from "../../styles/pages/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={signupImg} />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox
            type="checkbox"
            text=" I agree to the Terms &amp; Conditions"
          />
          <Button>
            <span>Sign up</span>
          </Button>
          <div className="info">
            Already have an account?
            <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
