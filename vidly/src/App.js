import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar';
import RegisterFrom from './components/registerForm';
import LoginForm from './components/loginForm';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main role="main" className="container">
        <Switch>
          <Route path="/register" component={RegisterFrom} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/404-not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/404-not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
