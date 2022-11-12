import classes from "../styles/Options.module.css";
import Checkbox from "./Checkbox";

export default function Options() {
  return (
    <div className={classes.answers}>
      <Checkbox
        className={classes.answer}
        htmlFor="option1"
        type="checkbox"
        id="option1"
        text="Using var"
      />
      <Checkbox
        className={classes.answer}
        htmlFor="option2"
        type="checkbox"
        id="option2"
        text="Using let"
      />
      <Checkbox
        className={classes.answer}
        htmlFor="option3"
        type="checkbox"
        id="option3"
        text="Using const"
      />
    </div>
  );
}
