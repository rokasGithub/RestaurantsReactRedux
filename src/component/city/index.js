import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchRestaurant, setLoading, fetchRestaurants } from '../../actions';
import './styles.scss';

class City extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(event) {
    event.preventDefault();
    this.props.fetchRestaurants(this.props.text);
    this.props.setLoading();
  }

  onChange = (event) => {
    this.props.searchRestaurant(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <form
          className='search-city-form'
          data-test='FormComponent'
          id='searchForm'
          onSubmit={this.fetch}
        >
          <label htmlFor='searchInput'></label>
          <input
            data-test='InputSearch'
            name='searchText'
            type='text'
            placeholder='Search for restaurants'
            onChange={this.onChange}
          />
          <button
            aria-label='Center Align'
            data-test='ButtonComponent'
            type='submit'
          >
            <i className='fa fa-search'></i>
          </button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.restaurantsReducer.text,
});

export default connect(mapStateToProps, {
  searchRestaurant,
  setLoading,
  fetchRestaurants,
})(City);
