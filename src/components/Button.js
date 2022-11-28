import classes from "../styles/Button.module.css";

export default function Button({ className, children, ...rest }) {
  return (
    <button
      type="submit"
      className={`${classes.button} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
