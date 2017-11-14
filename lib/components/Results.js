import React from 'react';
import Card from './Card.js';

export default function Results(props) {
  return (
    <div>
      <input id="search" placeholder="search" />
      
      {props.cardArray.map(card => 
        <Card title={card.title} 
              body={card.body} 
              quality={card.quality}/>)}
    </div>
  )
}