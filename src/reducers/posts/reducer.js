import { types } from './../../actions/types';
import { type } from 'os';

const initialState = {
  text: '',
  posts: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.POST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
