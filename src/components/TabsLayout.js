import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from './UserProfile';
import ActivityLog from './ActivityLog';
import TableComponent from './TableComponent';

class TabsLayout extends Component{

  render() {
    return (
      <Tabs defaultactiveKey={1} id="controlled-tab-example">
        <Tab eventKey={1} title="Your Stats" className="tabcontent">
            <UserProfile />
            <ActivityLog />
        </Tab>
        <Tab eventKey={2} title="Team Stats" className="tabcontent">
            <TableComponent />
        </Tab>
      </Tabs>
    );
  }
};

export default TabsLayout;
