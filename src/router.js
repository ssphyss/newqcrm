import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './components/demo/IndexPage';
import Admin from './../src/admin';
import Login from './pages/User/Login';
import Register from './pages/User/Register';
// UI
// 表單
import FormLogin from './components/UI/Form/FormLogin';
import FormRegister from './components/UI/Form/FormRegister';
// 表格
import TableBasic from './components/UI/Table/TableBasic';
// 圖表
import Bar from './components/UI/echarts/bar';
import Bar1 from './components/UI/echarts/bar/bar1.js';
// 其他
import CardBox from './components/UI/Card';
// 控制台
import Dashboard from './pages/Dashboard';
import LoginRecord from './components/Dashboard/LoginRecord';
import AdminMembers from './components/Dashboard/AdminMembers';
import Config from './components/Dashboard/Config';
// 借款管理
import BorrowList from './components/Borrow/BorrowList';
// 404頁面
import PageError from './pages/Page404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        <Route path="/" exact component={Admin} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/User/Login" component={Login} />
        <Route path="/User/Register" component={Register} />
        
        <Admin>
          {/* UI */}
          <Route path="/admin/ui/card" component={CardBox} />
          <Route path="/admin/table/basic" component={TableBasic} />
          <Route path="/admin/Form/Login" component={FormLogin} />
          <Route path="/admin/Form/Register" component={FormRegister} />
          <Route path="/admin/charts/bar" component={Bar} />
          <Route path="/admin/charts/bar1" component={Bar1} />
          {/* 控制台 */}
          <Route path="/dashboard/analysis" component={Dashboard} />
          <Route path="/dashboard/loginRecord" component={LoginRecord} />
          <Route path="/dashboard/adminMembers" component={AdminMembers} />
          <Route path="/dashboard/config" component={Config} />
          {/* 借款管理 */}
          <Route path="/borrow/list" component={BorrowList} />          
        </Admin>        
        <Route component={ PageError } />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
