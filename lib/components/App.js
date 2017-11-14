import React from 'react';
import Header from 'Header.js';
import Results from 'Results.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        I'm an App
        <Header />
        <Results />
      </div>
    )
  }

}