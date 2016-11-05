import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import LogDetails from './LogDetails';

class ActivityLog extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedActivity: null,
            activities: {
                "lift": {
                    name: "lifting",
                    units: "reps",
                    point: 8
                },
                "yoga": {
                    name: "yoga",
                    units: "minutes",
                    point: 30
                },
                "walk": {
                    name: "walking",
                    units: "minutes",
                    point: 30
                },
                "run": {
                    name: "running",
                    units: "miles",
                    point: 0.5
                },
                "brain": {
                    name: "brain training",
                    units: "minutes",
                    point: 10
                },
                "meditate": {
                    name: "meditation",
                    units: "minutes",
                    point: 10
                }
            }
        };
        this.onSelectHandler = this.onSelectHandler.bind(this);
        this.clearActivity = this.clearActivity.bind(this);
    }

    onSelectHandler(eventKey) {
        this.setState({ selectedActivity: this.state.activities[eventKey]});
    }

    clearActivity() {
        this.setState({ selectedActivity: null });
    }

    render() {
        return (
            <div>
                <DropdownButton bsStyle="default" className="activities-dropdown" title="Log New Activity" id="activities-dropdown">
                    <MenuItem onSelect={this.onSelectHandler} eventKey="lift">Lift (strength)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="yoga">Yoga (dexterity)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="walk">Walk (constitution)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="run">Run (wisdom)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="brain">Brain (intelligence)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="meditate">Meditate (charisma)</MenuItem>
                </DropdownButton>
                <LogDetails clearActivity={this.clearActivity} activity={this.state.selectedActivity} />
            </div>
        );
    }
};

export default ActivityLog;
