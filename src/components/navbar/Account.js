import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import classes from "../../styles/navbar/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className={classes.userName}>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <Link to="/signup" className={classes.signup}>
          Signup
        </Link>
      )}
    </div>
  );
}
