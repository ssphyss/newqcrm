import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import IndexPage from './../src/components/demo/IndexPage';
import Admin from './../src/admin';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Admin" exact component={Admin} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
