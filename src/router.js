import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import home from './routes/home/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={home} />
      
      </Switch>
    </Router>
  );
}

export default RouterConfig;
