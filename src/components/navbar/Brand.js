import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-bg.png";
import classes from "../../styles/navbar/Brand.module.css";

export default function Brand() {
  return (
    <ul>
      <li>
        <Link to="/" className={classes.brand}>
          <img src={logo} alt="Logo" />
          <h3>Random Fun Quiz</h3>
        </Link>
      </li>
    </ul>
  );
}
