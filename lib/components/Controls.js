import React from 'react';

export default class Controls extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <form>
        <input id="title" placeholder="title" />
        <input id="body" placeholder="body" />
        <button>Save</button>
      </form>
    )
  }
}

