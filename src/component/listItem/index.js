import React, { Component } from 'react';
import './styles.scss';

class ListItem extends Component {
  render() {
    const { name, address, price } = this.props;

    if (!name || !address || !price) {
      return null;
    }

    return (
      <div data-test='listItemComponent' className='cat-column'>
        <div className='cat-card'>
          <h3 data-test='componentTitle'> {name}</h3>
          <p data-test='componentDesc'>Address: {address}</p>
          <p data-test='componentRating'>Rating: {price}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
