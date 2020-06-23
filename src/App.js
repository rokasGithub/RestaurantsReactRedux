import React, { Component } from 'react';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions';
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
              <div id='catContainer'>
                {restaurants.map((restaurant, index) => {
                  const { name, address, price } = restaurant;
                  const configListItem = {
                    name,
                    address,
                    price,
                  };
                  return <ListItem key={index} {...configListItem} />;
                })}
              </div>
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

export default connect(mapStateToProps, { fetchRestaurants })(App);
