import React, {Component} from 'react';
import Searchform from './searchform/Searchform';

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <Searchform/>
        </div>
      </div>
    );
  }
}
