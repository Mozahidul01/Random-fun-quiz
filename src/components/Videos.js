import classes from "../styles/Videos.module.css";
import SingleVideo from "./SingleVideo";

export default function videos() {
  return (
    <div className={classes.videos}>
      <SingleVideo />
      <SingleVideo />
    </div>
  );
}
