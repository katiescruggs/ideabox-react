import React from 'react';
import Header from './Header.js';
import Results from './Results.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
    this.createCard = this.createCard.bind(this);
  }

  createCard(title, body) {
    console.log(this.state.cards);

    let newCardArray = this.state.cards;
    newCardArray.push(title + ' ' + body);

    this.setState({cards: newCardArray});

    console.log(this.state.cards)
  }

  render() {
    return (
      <div>
        <Header createCard = {this.createCard}/>
        <Results />
      </div>
    )
  }
}