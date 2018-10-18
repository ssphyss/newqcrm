import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd";
// import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            OKOK
          </p>
          <Button type="primary">Button</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
