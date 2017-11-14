import React from 'react';
import Card from './Card.js';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
    this.inputSearch = this.inputSearch.bind(this);
  }

  inputSearch(e) {
    this.setState({searchTerm: (e.target.value).toLowerCase()});
  }
 
  render() {
    return (
      <div>
        <input id="search" placeholder="Search" onChange={this.inputSearch} />
        {this.props.cardArray.map(card => {
          let title = card.title.toLowerCase();
          let body = card.body.toLowerCase();
          if(title.includes(this.state.searchTerm) || body.includes(this.state.searchTerm)) {
            return <Card title={card.title} 
                  body={card.body} 
                  quality={card.quality}/>
          }
        })
        }
      </div>
    )    
  }
}