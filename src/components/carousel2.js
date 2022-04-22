import React, { Component } from 'react';
import Slide from './slide';
import data from '../model';
import Lightbox from './lightbox';

class Carousel2 extends Component {
  constructor() {
    super();
    this.handleDialog = this.handleDialog.bind(this);
    this.handleDialogData = this.handleDialogData.bind(this);
    this.state = {
      items: data,
      showDialog: false,
      dialogKey: []
    }
  }

  handleDialog() {
    //Don't allow lightbox on mobile
    if(window.innerWidth > 1000) {
      return this.setState({showDialog: !this.state.showDialog })
    }
  }

  handleDialogData(key) {
    //Open dialog with key
    if(!this.state.showDialog) {
      this.setState({ dialogKey: key});
      this.handleDialog()
    }

    //Dialog is open, switch the key
    else {
      let items = this.state.items
      let newKey = key
      //End of array, go to first
      if (key > items.length) {
        newKey = 0
      }
      //Start of array, go to last item
      else if (key <= 0) {
        newKey = items.length - 1
      }
      //Advance to next or previous
      else {
        newKey = key - 1
      }
      //Set new state of key
      this.setState({ dialogKey: newKey});
    }
  }

  render() {
    let items = {...this.state.items}
    return (
      <div>
        <ul className="carousel-u carousel2" tabIndex="0" aria-orientation="horizontal" role="listbox" aria-roledescription="Featured solution screenshots">
        {Object
          .keys(items)
          .map(key => <Slide
              key={key}
              index={key}
              item={items[key]}
              handleDialogData={this.handleDialogData} />
          )
        }
          <li className="carousel-container2 video">
            <figure>
              <div className="content-video">
                <iframe title="Geopointe mocked YouTube video content" src="https://www.youtube-nocookie.com/embed/_EYJaA1TdGg?start=3" frameborder="0" allowtransparency="true" scrolling="false" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
              </div>
              <figcaption>
                <span className="title">Video Title</span>
                <span className="caption">Geopointe mocked YouTube video content</span>
              </figcaption>
            </figure>
          </li>
          <li className="carousel-container2 video">
            <figure>
              <div className="content-video">
              <iframe title="Geopointe mocked Vidyard video content" src="https://play.vidyard.com/1far7Y5f3yobSaN7Bhx9uV?autoplay=0" frameborder="0" allowtransparency="true" scrolling="false" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
              </div>
              <figcaption>
                <span className="title">Video Title</span>
                <span className="caption">Geopointe mocked Vimeo video content</span>
              </figcaption>
            </figure>
          </li>
        </ul>
        {this.state.showDialog ? <Lightbox item={items[this.state.dialogKey]} handleDialog={this.handleDialog} handleDialogData={this.handleDialogData} /> : null}
      </div>
    );
  }
}

export default Carousel2;
