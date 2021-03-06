// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import About from './pages/About';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import Blog from './pages/Blog'
import Pricing from './pages/Pricing'
const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <>
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          <Route path='/about' component={ About } />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser}/>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/instructors" component={ Instructors }/>
          <Route path='/blog' component={ Blog }/>
          <Route path='/pricing' component={ Pricing }/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;