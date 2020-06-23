import { types } from './types';
import axios from 'axios';

export const fetchPosts = (text) => async (dispatch) => {
  const defaultValue = text == '' ? 'null' : text;
  try {
    const res = await axios.get(
      `http://opentable.herokuapp.com/api/restaurants?city=${defaultValue}`
    );

    if (res.data.restaurants.length == 0) {
      dispatch({
        type: types.POST_ERROR,
        payload: 'No restaurants found!',
      });
    }
    dispatch({
      type: types.GET_POSTS,
      payload: res.data.restaurants,
    });
  } catch (err) {
    dispatch({
      type: types.POST_ERROR,
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
