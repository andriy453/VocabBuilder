import { Navigate } from 'react-router-dom';


const Routeg = ({ component: Component, redirectTo }) => {


  return  ( Component,  <Navigate to={redirectTo} /> )
};

export default Routeg;