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
      quality: 'swill',
      id: Date.now()
    }
    localStorage.setItem((newCard.id).toString(), JSON.stringify(newCard));
    let newCardArray = this.state.cards;
    newCardArray.push(newCard);
    this.setState({cards: newCardArray});
  }

  componentDidMount() {
    if(localStorage.length > 0) {
      let newCardArray = this.state.cards;
      Object.keys(localStorage).forEach(id => {
        let newCard = JSON.parse(localStorage.getItem(id));
        newCardArray.push(newCard);
      });
      this.setState({cards: newCardArray});
    }
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