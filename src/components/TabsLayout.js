import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from './UserProfile';

class TabsLayout extends Component{

  render() {
    return (
      <Tabs defaultactiveKey={1} id="controlled-tab-example">
        <Tab eventKey={1} title="Your Stats">
            <UserProfile />
        </Tab>
        <Tab eventKey={2} title="Team Stats"></Tab>
      </Tabs>
    );
  }
};

export default TabsLayout;
