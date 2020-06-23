import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = {
      loading: false,
      posts: [
        { body: 'Some Text', title: 'Example title 1' },
        { body: 'Some Text', title: 'Example title 2' },
        { body: 'Some Text', title: 'Example title 3' },
      ],
      text: '',
    };
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState.posts,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState).toBe(expectedState);
    });
  });
});
