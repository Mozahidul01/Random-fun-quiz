import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.svg";
import classes from "../../styles/pages/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={loginImg} />
        <Form className={`${classes.login}`}>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <Button>
            <span>Log in</span>
          </Button>
          <div className="info">
            Don&apos;t have an account?
            <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
