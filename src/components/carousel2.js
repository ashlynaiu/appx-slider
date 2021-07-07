import React, { Component } from 'react';
// import Lightbox from './lightbox';

class Carousel2 extends Component {

  render() {
    return (
      <div>
        <ul className="carousel-u carousel2">
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/1.jpg`)} alt="1" />
                        <figcaption>
                            <span className="title">Accelerate Your Business</span>
                            <span className="caption">Get up and running quickly with Composer to reduce document delivery time. Gain additional insights with notifications and document history that increase visibility, speeding up team velocity, processes, and business cycles.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/2.jpg`)} alt="2" />
                        <figcaption>
                            <span className="title">Automate For Consistency</span>
                            <span className="caption">Automate document creation to eliminate manual tasks using workflows that initiate and complete customer engagements based on any added logic. Standardize what you send to ensure you land on-brand, every time.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/3.jpg`)} alt="3" />
                        <figcaption>
                            <span className="title">Flexible to fit any solution</span>
                            <span className="caption">Pull data from across Salesforce objects, orgs, and external systems - like ERP, Marketing, and HR. This creates customized, personalized, and on time reports and documents with delivery-ease for every scenario.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/4.jpg`)} alt="4" />
                        <figcaption>
                            <span className="title">Accelerate Your Business</span>
                            <span className="caption">Get up and running quickly with Composer to reduce document delivery time. Gain additional insights with notifications and document history that increase visibility, speeding up team velocity, processes, and business cycles.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/5.jpg`)} alt="5" />
                        <figcaption>
                            <span className="title">Automate For Consistency</span>
                            <span className="caption">Automate document creation to eliminate manual tasks using workflows that initiate and complete customer engagements based on any added logic. Standardize what you send to ensure you land on-brand, every time.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
            <li className="carousel-container2">
                <a href="#">
                    <figure>
                        <img src={require(`../images/6.jpg`)} alt="6" />
                        <figcaption>
                            <span className="title">Flexible to fit any solution</span>
                            <span className="caption">Pull data from across Salesforce objects, orgs, and external systems - like ERP, Marketing, and HR. This creates customized, personalized, and on time reports and documents with delivery-ease for every scenario.</span>
                        </figcaption>
                    </figure>
                </a>
            </li>
        </ul>
      </div>
    );
  }
}

export default Carousel2;
