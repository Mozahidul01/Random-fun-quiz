import Image from "../assets/images/success.gif";
import classes from "../styles/Summary.module.css";

export default function Summary({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={Image} alt="Success" />
      </div>
    </div>
  );
}
