import { types } from './../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const initialState = {
      text: '',
      posts: [],
      loading: false,
    };
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should return new state if receiving type', () => {
    const posts = {
      loading: false,
      posts: [
        { body: 'Some Text', title: 'Example title 1' },
        { body: 'Some Text', title: 'Example title 2' },
        { body: 'Some Text', title: 'Example title 3' },
      ],
      text: '',
    };
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
