import { types } from './types';
import axios from 'axios';

export const fetchRestaurants = (text) => async (dispatch) => {
  const defaultValue = text === '' ? '' : text;
  try {
    const res = await axios.get(
      `http://opentable.herokuapp.com/api/restaurants?city=${defaultValue}`
    );

    if (
      res.data.restaurants.length === 0 ||
      !(text.toLowerCase() === res.data.restaurants[0].city.toLowerCase())
    ) {
      dispatch({
        type: types.RESTAURANT_ERROR,
        payload: 'No restaurants found!',
      });
    } else {
      dispatch({
        type: types.GET_RESTAURANTS,
        payload: res.data.restaurants,
      });
    }
  } catch (err) {
    dispatch({
      type: types.RESTAURANT_ERROR,
      payload: 'There was an error with your request.',
    });
  }
};

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: types.SEARCH_MOVIE,
    payload: text,
  });
};

export const setLoading = () => {
  return {
    type: types.LOADING,
  };
};
