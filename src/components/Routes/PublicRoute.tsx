import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { PrivatePublicRouteProps } from "./interfaces";

const PublicRoute = ({ children, redirectPath }: PrivatePublicRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return children;
  }

  // user is authenticated
  return <Navigate to={redirectPath} replace />;
};

export default PublicRoute;
