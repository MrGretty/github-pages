import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import withLoading from 'hocs/withLoading';

import Users from 'Users/Users';
import User from 'User/User';

import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/users"
            component={withLoading('https://api.github.com/users?since=0&per_page=10')(Users)}
          />
          <Route
            path="/user/:id"
            component={({ match }) => withLoading(`https://api.github.com/users/${match.params.id}`)(User)()}
          />
          <Redirect to="/users" />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
