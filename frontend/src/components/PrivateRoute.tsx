import { FC, ReactElement } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate } from "react-router-dom";

interface PrivateRouteProp {
  element: ReactElement;
}

const PrivateRoute: FC<PrivateRouteProp> = ({ element }: PrivateRouteProp) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(user);

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
