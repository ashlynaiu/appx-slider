import React, { Component } from 'react';
import Slide from './slide';
import data from '../model';
// import Lightbox from './lightbox';

class Carousel2 extends Component {
  constructor() {
    super();
    this.state = {
      items: data
    }
  }
  
//ACCESSIBILITY NOTES
//research list box
//role="listbox"
//enter or space to open up lightbox
//role="option"
//aria labels to indicate feature carousel 

  render() {
    let items = {...this.state.items}
    console.log(items)
    return (
      <div>
        <ul className="carousel-u carousel2" tabIndex="0" aria-orientation="horizontal" role="listbox" aria-roledescription="Featured solution screenshots">
        {Object
          .keys(items)
          .map(key => <Slide
              key={key}
              index={key}
              item={items[key]}/>
          )
        }
        </ul>
      </div>
    );
  }
}

export default Carousel2;
