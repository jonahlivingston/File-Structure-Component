import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import store from './Store';



const Routes = () => (
  <Router history = {browserHistory}>
    <Route path="/" component = {Home}>
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
