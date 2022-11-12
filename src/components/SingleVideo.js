import { Link } from "react-router-dom";
import thumb from "../assets/images/3.jpg";
import classes from "../styles/SingleVideo.module.css";

export default function singleVideo() {
  return (
    <Link to="/quiz">
      <div className={classes.video}>
        <img src={thumb} alt="" />
        <p>Fun with JavaScript</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
}
