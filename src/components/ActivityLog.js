import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ActivityLog extends Component{
// add function that will trigger modal with the onSelect

  onSelectAlert(eventKey) {
    console.log(`chose menu item ${eventKey}`);
  }

  render() {
    return (
      <DropdownButton bsStyle="title.toLowerCase()"  title="Log New Activity" id="dropdown-basic-${i}" >
        <MenuItem onSelect={this.onSelectAlert} eventKey="Lift">Lift (strength)</MenuItem>
        <MenuItem onSelect={this.onSelectAlert} eventKey="Yoga">Yoga (dexterity)</MenuItem>
        <MenuItem onSelect={this.onSelectAlert} eventKey="Walk">Walk (constitution)</MenuItem>
        <MenuItem onSelect={this.onSelectAlert} eventKey="Run">Run (wisdom)</MenuItem>
        <MenuItem onSelect={this.onSelectAlert} eventKey="Brain">Brain (intelligence)</MenuItem>
        <MenuItem onSelect={this.onSelectAlert} eventKey="Meditate">Meditate (charisma)</MenuItem>
      </DropdownButton>
    );
  }
};

export default ActivityLog;
