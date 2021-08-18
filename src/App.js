import React, { Component } from 'react';
import Carousel2 from './components/carousel2';
import Carousel1 from './components/carousel1';


class App extends Component {

  render() {
    return (
      <div className="app">
        <button class="sample-button">
          Get it Now
        </button>
        <div className="proto">
          <Carousel2 />
        </div>
      </div>
    );
  }
}

export default App;
