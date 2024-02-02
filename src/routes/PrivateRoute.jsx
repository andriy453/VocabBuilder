import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({component: Component, redirectTo   }) {
  const { token } = useSelector(state => state.Auth);
  return token ?  Component : <Navigate to={redirectTo} />;
}

export default PrivateRoute;