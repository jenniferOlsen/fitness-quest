import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TableComponent extends Component{

render() {
    return (
  <Table striped bordered condensed hover className="team-stats">
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>First Name</th>
        <th>Last Name</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>@FitnessFreak</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <td>2</td>
        <td>@FitnessFreak</td>
        <td>Jacob</td>
        <td>Thornton</td>
      </tr>
    </tbody>
  </Table>
    );
  }
};

export default TableComponent;
