import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

export const App = (props) => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: getUser(state) });

export default connect(mapStateToProps)(App);
