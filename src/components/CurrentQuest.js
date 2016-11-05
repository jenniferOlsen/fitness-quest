import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class CurrentQuest extends Component{

constructor(props) {
        super(props);
        this.state = {
            user: {
                name: 'Sphinx',
                strength: 50,
                constitution: 55,
                dexterity: 35,
                intelligence: 40,
                wisdom: 25,
                charisma: 15
            },
            currentQuest: 'Sphinx'
        };
      }

  render() {
    return (
     <div className="profile">
        <h2>Current Quest:  {this.state.user.name} </h2>
         <Image alt="avatar" src="http://lorempixel.com/180/180/food/" rounded />
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

 
export default CurrentQuest;