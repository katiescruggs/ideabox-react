import React from 'react';
import Controls from './Controls.js';

export default function Header(props) {
  return (
    <header>
      <h1>IdeaBox</h1>
      <Controls createCard = {props.createCard}/>
    </header>
  )
}