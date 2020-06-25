import { types } from '../../actions/types';

const initialState = {
  text: '',
  restaurants: [],
  loading: false,
  error: '',
  searchName: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_RESTAURANT:
      return {
        ...state,
        text: payload,
        loading: false,
      };
    case types.SEARCH_RESTAURANT_NAME:
      return {
        ...state,
        searchName: payload,
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
        restaurants: [],
      };
    default:
      return state;
  }
};
