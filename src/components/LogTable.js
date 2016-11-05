import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class LogTableRow extends Component {

    render() {
        const points = `+${this.props.activity.units/this.props.activity.activity.point} ${this.props.activity.activity.skill}`;
        const d = this.props.activity.date;
        const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        return (
            <tr>
                <td>{date}</td>
                <td>{this.props.activity.activity.name}</td>
                <td>{this.props.activity.units} {this.props.activity.activity.units}</td>
                <td>{points}</td>
            </tr>
        )

    }
}

class LogTable extends Component {
    render() {
        return <Table bordered condensed responsive>
            <thead>
            <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Amount</th>
                <th>Reward</th>
            </tr>
            </thead>
            <tbody>
            {this.props.activities.map((activity, i) => <LogTableRow activity={activity} key={i} />)}
            </tbody>
        </Table>;
    }
}

LogTable.propTypes = {
    activities: React.PropTypes.array
};

export default LogTable;
