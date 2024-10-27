import React, { Component } from 'react';

class FirstThreeSection extends Component {
  render() {
    const {
      wrapperName,
      New,
      title,
      titleTwo,
      description,
      descriptionTwo,
      price,
      priceTwo,
      Order,
      Buy,
      ipodCaption,
      magic } = this.props
    return (
      <section className={wrapperName}>
        <div className="container">
          {New && <div className="new-alert">New</div>}
          <div className="title-wraper bold black">{title}</div>
          <div className="title-wraper bold">{titleTwo}</div>
          {description && (
            <div className="description-wrapper black">
              Twice the speed. Twice the storage.
            </div>
          )}
          {descriptionTwo && ( <div className="description-wrapper">
              Pro cameras. Pro display. Pro performance.
            </div>
          )}
          {price && <div className="price-wrapper grey">From $999.</div>}

          {priceTwo && (<div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
            </div>)}

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              {Order && (<li>
                  <a href="">Order</a>
                </li> )}
              {Buy && (<li>
                  <a href="">Buy</a>
                </li>)}
            </ul>
          </div>
          {ipodCaption && (
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
                {ipodCaption}
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">{magic}</div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default FirstThreeSection;
