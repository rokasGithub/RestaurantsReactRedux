import React, { Component } from 'react';
import './styles.scss';

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div id='headline' data-test='HeadlineComponent'>
        <h1 className='headline-button' data-test='header'>
          {header}
        </h1>
        <p data-test='headline-desc'>{desc}</p>
      </div>
    );
  }
}

export default Headline;
