import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class ListItem extends Component {
  render() {
    const { name, address, price } = this.props;

    return (
      <div data-test='listItemComponent' className='cat-column'>
        <div className='cat-card'>
          <h3 data-test='componentTitle'> {name}</h3>
          <p data-test='componentDesc'>Address: {address}</p>
          <p data-test='componentDesc'>Rating: {price}</p>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {};

export default ListItem;
