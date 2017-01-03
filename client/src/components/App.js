import React, { Component } from 'react';
import Clock from './Clock';
import '../stylesheets/bootstrap.vertical-tabs.min.css';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
