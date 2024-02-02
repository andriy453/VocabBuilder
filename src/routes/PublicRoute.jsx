import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from "../redux/Auth/selectors";
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, redirectTo }) => {

const isLoggedIn =  useSelector(selectIsLoggedIn)
console.log(isLoggedIn)
  return !isLoggedIn ?  Component : <Navigate to={redirectTo} /> ;
};

export default PublicRoute;
