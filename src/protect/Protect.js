import { Outlet, Navigate } from "react-router-dom";
//import Login from "../components/Login";
//import Home from "../components/Home";

const Auth = () => {
  const user = { Login: true };

  return user && user.Login;
};

const Protect = () => {
  const isauth = Auth();

  return isauth ? <Outlet /> : <Navigate to="/" />;
  /* Navigate use panna  eg: home link click panna /home lam url la
  show aagadhu (to="" la kudukura link dhan url la show aagum) */
};

export default Protect;

/*Outlet : An <Outlet> should be used in parent route elements 
to render their child route elements. 
This allows nested UI to show up when child routes are rendered. 
If the parent route matched exactly, 
it will render a child index route or nothing if there is no index route.*/
