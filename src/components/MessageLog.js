import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class MessageLog extends Component{
// add function that will trigger modal with the onSelect

  onSelectAlert(eventKey) {
    console.log(`chose menu item ${eventKey}`);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Message Board</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Chat to the group here..." />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
};

export default MessageLog;
