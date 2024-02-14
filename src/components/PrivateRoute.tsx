import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userInfo = false;

  return userInfo ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
