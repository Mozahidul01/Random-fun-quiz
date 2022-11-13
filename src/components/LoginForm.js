import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/pages/Login.module.css";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loding, setLoding] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  async function handleSubmit(e) {
    e.preventDefault();

    // Email Validation
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      return setError("please input valid Email");
    }

    try {
      setError("");
      setLoding(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoding(false);
      setError("Faild to Log in!");
    }
  }
  return (
    <Form className={`${classes.login}`} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={loding}>
        <span>Log in</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don&apos;t have an account?
        <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
