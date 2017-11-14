import React from 'react';
import Card from './Card.js';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input id="search" placeholder="Search" />
        {this.props.cardArray.map(card => 
          <Card title={card.title} 
                body={card.body} 
                quality={card.quality}/>)}
      </div>
    )    
  }
}