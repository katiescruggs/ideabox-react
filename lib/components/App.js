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
    let newCard = {
      title: title,
      body: body,
      quality: 'swill'
    }

    let newCardArray = this.state.cards;
    newCardArray.push(newCard);

    this.setState({cards: newCardArray});

    console.log(this.state.cards[0]);
  }

  render() {
    return (
      <div>
        <Header createCard = {this.createCard}/>
        <Results cardArray = {this.state.cards}/>
      </div>
    )
  }
}