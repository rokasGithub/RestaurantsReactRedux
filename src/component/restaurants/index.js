import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchRestaurantName } from '../../actions';
import PropTypes from 'prop-types';
import ListItem from '../listItem';
import './styles.scss';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: this.props.restaurants };
    this.handleChange = this.handleChange.bind(this);
    this.filterRestaurants = this.filterRestaurants.bind(this);
  }

  handleChange(e) {
    this.props.searchRestaurantName(e.target.value);
    this.filterRestaurants(e.target.value);
  }

  filterRestaurants(userSearch) {
    const search = userSearch.toLowerCase().trim();
    if (search === '') {
      this.setState({
        restaurants: this.props.restaurants,
      });
    } else {
      const filteredData = this.props.restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !==
          -1
      );
      this.setState({
        restaurants: filteredData,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <label className='headline-button' htmlFor='filterInput'>
          Filter restaurant by name
        </label>
        <form className='example'>
          <label htmlFor='searchInput'></label>
          <input
            name='searchText'
            type='text'
            id='searchNameInput'
            placeholder='Search restaurants'
            className='search2 searchTerm'
            onChange={this.handleChange}
          />
        </form>

        <div id='restaurantContainer'>
          {this.state.restaurants.map((restaurant, index) => {
            const { name, address, price } = restaurant;
            const configListItem = {
              name,
              address,
              price,
            };
            return <ListItem key={index} {...configListItem} />;
          })}
        </div>
        <div className='clearboth'></div>
        {this.state.restaurants.length === 0 && (
          <span className='warningInfo'>
            No restourant {this.props.text} found!
          </span>
        )}
      </Fragment>
    );
  }
}

Restaurants.propTypes = {
  restaurants: PropTypes.array,
};

const mapStateToProps = (state) => ({
  text: state.restaurantsReducer.searchName,
});

export default connect(mapStateToProps, {
  searchRestaurantName,
})(Restaurants);
