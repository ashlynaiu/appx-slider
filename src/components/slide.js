import React, { Component } from 'react';

class slide extends Component {
  render() {
    const info = this.props.item
    const handleDialogData = this.props.handleDialogData

    return (
      <li className="carousel-container2" onClick={() => handleDialogData(info.id)}>
        <figure>
          <img src={require(`../images/${info.name}.jpg`)} alt={info.name} />
          <figcaption>
            <span className="title">{info.title}</span>
            <span className="caption">{info.caption}</span>
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default slide;