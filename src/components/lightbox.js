import React, { Component } from 'react';
import Icon from './icon';

class Lightbox extends Component {
  //Component Initalizes
  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.props.handleDialog()
  }

  render() {
    const info = this.props.item
    let forwardKey = parseInt(info.name) + 1
    let backwardKey = parseInt(info.name) - 1

    return (
        <div className="lightbox-background">
          <div className="lightbox" ref={node => this.node = node }>
            <button className="slds-button slds-button_icon slds-button_icon-border-filled close" aria-pressed="false" title="Close" onClick={this.props.handleDialog}>
              <Icon type="utility" object="close" size="small" />
              <span className="slds-assistive-text">Close</span>
            </button>
            <button className="slds-button slds-button_icon slds-button_icon-border-filled forward" aria-pressed="false" title="Forward" onClick={() =>this.props.handleDialogData(forwardKey)}>
              <Icon type="utility" object="forward" size="small" />
              <span className="slds-assistive-text">Forward</span>
            </button>
            <button className="slds-button slds-button_icon slds-button_icon-border-filled back" aria-pressed="false" title="Back" onClick={() =>this.props.handleDialogData(backwardKey)}>
              <Icon type="utility" object="back" size="small"/>
              <span className="slds-assistive-text">Back</span>
            </button>
            <figure>
              <img src={require(`../images/${info.name}.jpg`)} alt={info.name} />
              <figcaption>
                <span className="title">{info.title}</span>
                <span className="caption">{info.caption}</span>
              </figcaption>
            </figure>
          </div>
        </div>
    )      
  }
}

export default Lightbox;
