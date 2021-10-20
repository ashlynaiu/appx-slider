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

//ACCESSIBILITY NOTES
//research list box
//role="listbox"
//enter or space to open up lightbox
//role="option"
//aria labels to indicate feature carousel 

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
        </ul>
        {this.state.showDialog ? <Lightbox item={items[this.state.dialogKey]} handleDialog={this.handleDialog} handleDialogData={this.handleDialogData} /> : null}
      </div>
    );
  }
}

export default Carousel2;
