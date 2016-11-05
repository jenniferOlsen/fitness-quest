import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserProfile from './UserProfile';
import ActivityLog from './ActivityLog';
<<<<<<< HEAD
import CurrentQuest from './CurrentQuest';
=======
import TableComponent from './TableComponent';
>>>>>>> 113c70714c5e57ebc9c291017178b39693308726

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
            <CurrentQuest />
        </Tab>

      </Tabs>
    );
  }
};

export default TabsLayout;
