import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class UserProfile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Sara',
                strength: 10,
                constitution: 11,
                dexterity: 7,
                intelligence: 8,
                wisdom: 5,
                charisma: 3
            },
            currentQuest: 'Sphinx'
        };
      }

  render() {
    return (
     <div className="profile">
        <h2>Welcome {this.state.user.name} </h2>
         <Image alt="avatar" src="http://lorempixel.com/350/350/cats/" rounded />
         <ul className="stats-list">
             <li>Strength: {this.state.user.strength}</li>
             <li>Consitution: {this.state.user.constitution}</li>
             <li>Dexterity: {this.state.user.dexterity}</li>
             <li>Intelligence: {this.state.user.intelligence}</li>
             <li>Wisdom: {this.state.user.wisdom}</li>
             <li>Charisma: {this.state.user.charisma}</li>

         </ul>
     </div>
    );
  }
};

export default UserProfile;
