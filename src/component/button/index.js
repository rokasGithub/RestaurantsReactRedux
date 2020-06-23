import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, setLoading, fetchRestaurants } from '../../actions';
import './styles.scss';

class SharedButton extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(event) {
    event.preventDefault();
    this.props.fetchRestaurants(this.props.text);
    this.props.setLoading();
  }

  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  render() {
    return (
      <div className='search'>
        <form id='searchForm' onSubmit={this.fetch}>
          <label htmlFor='searchInput'></label>
          <input
            className='searchTerm'
            id='searchInput'
            type='text'
            name='searchText'
            placeholder='Search for restaurants...'
            onChange={this.onChange}
          />

          <button
            data-test='buttonComponent'
            type='submit'
            className='searchButton'
            aria-label='Center Align'
          >
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.restaurantsReducer.text,
});

//export default SharedButton;
export default connect(mapStateToProps, {
  searchMovie,
  setLoading,
  fetchRestaurants,
})(SharedButton);
