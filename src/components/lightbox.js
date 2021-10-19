import React, { Component } from 'react';
import Icon from './icon';

class Lightbox extends Component {

  render() {
    const info = this.props.item
    return (
        <div className="lightbox-background">
          <div className="lightbox">
            <button class="slds-button slds-button_icon close" title="Settings" onClick={this.props.handleDialog}>
              <Icon type="utility" object="close" />
              <span class="slds-assistive-text">Close</span>
            </button>
            <button class="slds-button slds-button_icon slds-button_icon-border-filled forward" aria-pressed="false" title="Like">
              <Icon type="utility" object="forward" size="small" />
              <span class="slds-assistive-text">Like</span>
            </button>
            <button class="slds-button slds-button_icon slds-button_icon-border-filled back" aria-pressed="false" title="Like">
              <Icon type="utility" object="back" size="small"/>
              <span class="slds-assistive-text">Like</span>
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
