import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';
import Spinner from './component/shared/Spinner';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  render() {
    const { posts, loading, error } = this.props;

    const configButton = {
      buttonText: ' ',
      emitEvent: this.fetch,
    };

    return (
      <div id='content' className='App' data-test='appComponent'>
        <nav>
          <div id='header'>
            <SharedButton {...configButton} />
          </div>
        </nav>
        <main>
          <div id='mainContent'>
            <Headline
              header='Canadian Restaurant Finder'
              desc='Search
              for a city in Canada and the results will be displayed.'
              tempArr={tempArr}
            />

            {loading ? (
              <Spinner />
            ) : posts.length > 0 ? (
              <div id='catContainer'>
                {posts.map((post, index) => {
                  const { name, address, price } = post;
                  const configListItem = {
                    name,
                    address,
                    price,
                  };
                  return <ListItem key={index} {...configListItem} />;
                })}
              </div>
            ) : error != '' ? (
              <p className='warningInfo'>
                No restaurants found for the provided city.
              </p>
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
    posts: state.postsReducer.posts,
    error: state.postsReducer.error,
    loading: state.postsReducer.loading,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
