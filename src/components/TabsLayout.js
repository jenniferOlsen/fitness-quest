import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class TabsLayout extends Component{

  render() {
    return (
      <Tabs defualtactiveKey={1} id="controlled-tab-example">
        <Tab eventKey={1} title="Your Stats"></Tab>
        <Tab eventKey={2} title="Team Stats"></Tab>
      </Tabs>
    );
  }
};

export default TabsLayout;
