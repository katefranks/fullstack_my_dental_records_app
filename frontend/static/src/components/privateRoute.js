// import { Component } from 'react';
import { BrowserRouter as Route,  Redirect } from 'react-router-dom'



function PrivateRoute({isAuthenticated, ...props}) {
  return isAuthenticated
    ? <Route {...props} />
    : <Redirect to='/login' />
}
export default PrivateRoute;
