import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class MessageLog extends Component{

  constructor(props) {
      super(props);
      this.state = { value: '', messages: [] };
      this.printMessages = this.printMessages;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
      // "Save" the data here
      e.preventDefault();
      this.setState({ messages: [this.state.value].concat(this.state.messages)});
      this.setState({value: ''})
  }

  onSelectAlert(eventKey) {
    console.log(`chose menu item ${eventKey}`);
  }

  render() {
    return (
      <div id="messageBoard">
        <form className="message-form">
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Message Board</ControlLabel>
              <FormControl componentClass="textarea" value={this.state.value} onChange={this.handleChange} placeholder="Chat to the group here..." />
            </FormGroup>
            <Button onClick={this.handleSubmit} type="submit" >Post Message</Button>
        </form>
        <div id="currentMessages">
          <ul className="message-box">
              {this.state.messages.map(function(messages) {
              return <li key={messages}>{messages}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default MessageLog;
