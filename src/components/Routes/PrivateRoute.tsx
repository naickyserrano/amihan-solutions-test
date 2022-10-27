import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { PrivatePublicRouteProps } from "./interfaces";

const PrivateRoute = ({ children, redirectPath }: PrivatePublicRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PrivateRoute;
