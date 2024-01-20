import { Outlet, Navigate, } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dashboard from "../Navbar/Dashboard";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  console.log(isAuthenticated)
  return(
    isAuthenticated ? <Dashboard/> : <Navigate to="/login" replace />
  )
}
export default ProtectedRoute

