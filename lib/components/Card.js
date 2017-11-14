import React from 'react';

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <p>quality: {this.props.quality}</p>
      </article>
    )
  }
}