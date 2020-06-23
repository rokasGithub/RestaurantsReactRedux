import React from 'react';
import './styles.scss';
// import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
  return (
    <div data-test='headerComponent'>
      <div className='wrap'>
        <h1 id='appName'>Restaurant Finder</h1>
      </div>
    </div>
  );
};

export default Header;
