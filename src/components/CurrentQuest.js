import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import sphinx from '../../assets/sphinx.png';

class CurrentQuest extends Component{

constructor(props) {
        super(props);
        this.state = {
            sphinxStats: {
                intelligence: 108,
                wisdom: 123,
                charisma: 97
            },
            currentQuest: 'Sphinx'
        };
      }

  render() {
    return (
     <div className="profile">
        <h2>Current Quest:  {this.state.currentQuest} </h2>
         <Image alt="avatar" src={sphinx} rounded />
         <ul className="stats-list">
             <li>Intelligence: {this.state.sphinxStats.intelligence}</li>
             <li>Wisdom: {this.state.sphinxStats.wisdom}</li>
             <li>Charisma: {this.state.sphinxStats.charisma}</li>
         </ul>
     </div>
    );
  }
};


export default CurrentQuest;
