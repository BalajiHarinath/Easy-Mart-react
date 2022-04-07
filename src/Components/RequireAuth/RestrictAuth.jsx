import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context";

export const RestrictAuth = () => {
  const { authState: { userId } } = useAuth();
  const location = useLocation();
  return userId ? (
    <Navigate to={`${location.state ? location.state.from.pathname : "/"}`} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
