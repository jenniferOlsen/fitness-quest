import React, { Component } from 'react';
import { Modal, Button, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';

class LogDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logActivity(parseFloat(this.state.value));
        this.props.dismiss();
    }

    render() {
        return (
            <form>
                <FormGroup controlId="formMinutes" >
                    <ControlLabel>
                        How many {this.props.activity.units} of {this.props.activity.name} did you do?
                    </ControlLabel>
                    <FormControl
                        type="text"
                        autoComplete="off"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <Button onClick={this.props.dismiss}>Cancel</Button>
                    <Button onClick={this.handleSubmit} type="submit" bsStyle="primary">Save</Button>
                </FormGroup>
            </form>
        )
    }
}

LogDetailForm.propTypes = {
    dismiss: React.PropTypes.func,
    activity: React.PropTypes.object
};


class LogDetails extends Component{

    constructor(props) {
        super(props);
        this.dismiss = this.dismiss.bind(this);
    }

    dismiss() {
        this.props.clearActivity();
    }

    render() {
        if (!!this.props.activity) {
            return (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Activity Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LogDetailForm activity={this.props.activity} dismiss={this.dismiss} logActivity={this.props.logActivity} />
                    </Modal.Body>
                </Modal.Dialog>
            )
        }
        return <span />
    }
}

LogDetails.PropTypes = {
    activity: React.PropTypes.object,
    clearActivity: React.PropTypes.func,
    logActivity: React.PropTypes.func
};

export default LogDetails;
