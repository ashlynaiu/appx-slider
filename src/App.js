import React, { Component } from 'react';
import Carousel from './components/carousel';
import Carousel2 from './components/carousel2';


class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="proto">
          <Carousel />
        </div>
        <div className="proto">
          <Carousel2 />
        </div>
      </div>
    );
  }
}

export default App;
