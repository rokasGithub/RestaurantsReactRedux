import { types } from '../../actions/types';
import restaurantsReducer from './reducer';

describe('restaurants Reducer', () => {
  it('Should return default state', () => {
    const initialState = {
      text: '',
      restaurants: [],
      loading: false,
      error: '',
    };
    const newState = restaurantsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should return new state if receiving type', () => {
    const restaurants = {
      loading: false,
      restaurants: [{ body: 'Some Text', title: 'Example title 1' }],
      text: '',
      error: '',
    };
    const newState = restaurantsReducer(undefined, {
      type: types.GET_RESTAURANTS,
      payload: restaurants.restaurants,
    });
    expect(newState).toEqual(restaurants);
  });
});
