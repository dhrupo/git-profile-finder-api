/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import ReactDOM from 'react-dom';
import Header from '../components/common/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from '../context/GithubState';
import Home from '../pages/Home';
import UserDetails from "../components/Users/UserDetails";
import NotFound from "../components/common/NotFound";
import '../scss/main.scss';

if (document.getElementById('app')) {
  ReactDOM.render(
    <GithubState>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path='/users/:login' component={UserDetails}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </GithubState>
    , document.getElementById('app'));
}
