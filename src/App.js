import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import TabsLayout from './components/TabsLayout';
import logo from './logo.svg';
import './App.css';
import MessageLog from './components/MessageLog';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fitness Quest</h2>
        </div>
<<<<<<< HEAD
        <TabsLayout />
        

      
      
      
        <div>Message board component here</div>
=======
        <Grid>
          <Row>
            <TabsLayout />
          </Row>
          <Row>
            <MessageLog />
          </Row>
        </Grid>
>>>>>>> 113c70714c5e57ebc9c291017178b39693308726
      </div>
    );
  }
}

export default App;
