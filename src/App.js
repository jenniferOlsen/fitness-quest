import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import TabsLayout from './components/TabsLayout';
import logo from '../assets/logo.png';
import './App.css';
import MessageLog from './components/MessageLog';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-name">Fitness Quest</h2>
        </div>
        <Grid>
          <Row>
            <TabsLayout />
          </Row>
          <Row>
            <MessageLog />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
