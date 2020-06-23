import { types } from '../../actions/types';

const initialState = {
  text: '',
  restaurants: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_MOVIE:
      return {
        ...state,
        text: payload,
        loading: false,
      };
    case types.GET_RESTAURANTS:
      return {
        ...state,
        restaurants: payload,
        loading: false,
      };
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.RESTAURANT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
