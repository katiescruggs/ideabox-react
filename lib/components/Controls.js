import React from 'react';

export default class Controls extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.inputTitle = this.inputTitle.bind(this);
    this.inputBody = this.inputBody.bind(this);
    this.handleClick = () => {
      this.props.createCard(this.state.title, this.state.body);
    }
  }

  inputTitle(e) {
    console.log(e.target.value);
    this.setState({title: e.target.value});
    console.log(this.state);
  }

  inputBody(e) {
    this.setState({body: e.target.value});
    console.log(this.state);
  }

  

  render() {
    return (
      <form>
        <input id="title" placeholder="title" onChange={this.inputTitle} />
        <input id="body" placeholder="body" onChange={this.inputBody} />
        <button onClick={this.handleClick}>Save</button>
      </form>
    )
  }
}

