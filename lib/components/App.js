import React from 'react';
import Header from './Header.js';
import Results from './Results.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.createCard = this.createCard.bind(this);
  }

  createCard(title, body) {
    console.log('card title: ' + title + ', card body: ' + body);
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