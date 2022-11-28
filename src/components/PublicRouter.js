import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRouter({ children }) {
  const { currentUser } = useAuth();

  return !currentUser ? children : <Navigate to="/" replace />;
}
