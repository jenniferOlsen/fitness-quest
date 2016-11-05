import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import LogDetails from './LogDetails';
import LogTable from './LogTable';

class ActivityLog extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedActivity: null,
            activities: {
                "lift": {
                    name: "lifting",
                    units: "reps",
                    point: 8,
                    skill: "strength"
                },
                "yoga": {
                    name: "yoga",
                    units: "minutes",
                    point: 10,
                    skill: "dexterity"
                },
                "walk": {
                    name: "walking",
                    units: "minutes",
                    point: 30,
                    skill: "constitution"
                },
                "run": {
                    name: "running",
                    units: "miles",
                    point: 0.5,
                    skill: "wisdom"
                },
                "brain": {
                    name: "brain training",
                    units: "minutes",
                    point: 10,
                    skill: "intelligence"
                },
                "meditate": {
                    name: "meditation",
                    units: "minutes",
                    point: 10,
                    skill: "charisma"
                }
            },
            loggedActivities: [{
                activity: {
                    name: "yoga",
                    units: "minutes",
                    point: 10,
                    skill: "dexterity"
                },
                units: 45,
                date: new Date(new Date() - 24*60*60*1000)
            }]
        };
        this.onSelectHandler = this.onSelectHandler.bind(this);
        this.clearActivity = this.clearActivity.bind(this);
        this.logActivity = this.logActivity.bind(this);
    }

    onSelectHandler(eventKey) {
        this.setState({ selectedActivity: this.state.activities[eventKey]});
    }

    clearActivity() {
        this.setState({ selectedActivity: null });
    }

    logActivity(duration) {
        const activities = this.state.loggedActivities;
        activities.unshift({
            activity: this.state.selectedActivity,
            units: duration,
            date: new Date()
        });
        this.setState({ loggedActivities: activities })
    }

    render() {
        return (
            <div>
                <DropdownButton bsStyle="default" className="activities-dropdown" title="Log New Activity" id="activities-dropdown">
                    <MenuItem onSelect={this.onSelectHandler} eventKey="lift" className="dropdown-menu-cust">Lift (strength)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="yoga" className="dropdown-menu-cust">Yoga (dexterity)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="walk" className="dropdown-menu-cust">Walk (constitution)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="run" className="dropdown-menu-cust">Run (wisdom)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="brain" className="dropdown-menu-cust">Brain (intelligence)</MenuItem>
                    <MenuItem onSelect={this.onSelectHandler} eventKey="meditate" className="dropdown-menu-cust">Meditate (charisma)</MenuItem>
                </DropdownButton>
                <LogDetails clearActivity={this.clearActivity} activity={this.state.selectedActivity} logActivity={this.logActivity} />
                <LogTable activities={this.state.loggedActivities} />
            </div>
        );
    }
};

export default ActivityLog;
