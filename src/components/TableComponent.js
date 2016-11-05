import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TableComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            team: {
                user1: {
                    name: 'Sara',
                    strength: 10,
                    constitution: 11,
                    dexterity: 7,
                    intelligence: 8,
                    wisdom: 5,
                    charisma: 3
                },
                user2: {
                    name: 'Jenny',
                    strength: 3,
                    constitution: 5,
                    dexterity: 9,
                    intelligence: 12,
                    wisdom: 10,
                    charisma: 5
                },
            }
        };
      }
render() {
    return (
  <Table className="team-stats">
    <thead>
      <tr>
        <th>Name</th>
        <th>Strength</th>
        <th>Constitution</th>
        <th>Dexterity</th>
        <th>Intelligence</th>
        <th>Wisdom</th>
        <th>Charisma</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{this.state.team.user1.name}</td>
        <td>{this.state.team.user1.strength}</td>
        <td>{this.state.team.user1.constitution}</td>
        <td>{this.state.team.user1.dexterity}</td>
        <td>{this.state.team.user1.intelligence}</td>
        <td>{this.state.team.user1.wisdom}</td>
        <td>{this.state.team.user1.charisma}</td>
      </tr>
      <tr>
        <td>{this.state.team.user2.name}</td>
        <td>{this.state.team.user2.strength}</td>
        <td>{this.state.team.user2.constitution}</td>
        <td>{this.state.team.user2.dexterity}</td>
        <td>{this.state.team.user2.intelligence}</td>
        <td>{this.state.team.user2.wisdom}</td>
        <td>{this.state.team.user2.charisma}</td>
      </tr>
    </tbody>
  </Table>
    );
  }
};

export default TableComponent;
