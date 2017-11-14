import React from 'react';
import Controls from 'Controls.js';

export default function Header() {
  return (
    <h1>IdeaBox</h1>
    <input id="title" placeholder="title" />
    <input id="body" placeholder="body" />
    <button>Save</button>
  )
}