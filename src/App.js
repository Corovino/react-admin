import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.scss';
import AppRouter from './routers/AppRouter';
import logo from './logo.svg';




class App extends Component {
  render() {
    return (
      <div className="App">
           <AppRouter />
      </div>
    );
  }
}

export default App;
