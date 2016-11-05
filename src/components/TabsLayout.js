import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class TabsLayout extends Component{

  render() {
    return (
      <Tabs defualtactiveKey={1} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    );
  }
};

export default TabsLayout;
