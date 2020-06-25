import React, { Component, Fragment } from 'react';
import Headline from './component/headline';
import SharedButton from './component/button';
import Restaurants from './component/restaurants';
import { connect } from 'react-redux';
import { searchRestaurantName } from './actions';
import './app.scss';
import Spinner from './component/shared/Spinner';

class App extends Component {
  render() {
    const { restaurants, loading, error } = this.props;
    return (
      <div id='content' className='App' data-test='appComponent'>
        <nav>
          <div id='header'>
            <SharedButton />
          </div>
        </nav>
        <main>
          <div id='mainContent'>
            <Headline
              header='Canadian Restaurant Finder'
              desc='Search
              for a city in Canada and the results will be displayed.'
            />

            {loading ? (
              <Spinner />
            ) : restaurants.length > 0 ? (
              <Fragment>
                <Restaurants restaurants={restaurants} />
              </Fragment>
            ) : error !== '' ? (
              <p className='warningInfo'>No restaurants found</p>
            ) : (
              ''
            )}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurantsReducer.restaurants,
    error: state.restaurantsReducer.error,
    loading: state.restaurantsReducer.loading,
  };
};

export default connect(mapStateToProps, {
  searchRestaurantName,
})(App);
