import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends Component {
  render() {
    const { LinkName, LinkUrl, search, cart } = this.props.arrayData;
    return (
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
          {LinkName} <img src={search} alt="" /> <img src={cart} alt="" />
        </Link>
      </li>
    );
  }
}

export default NavLinks;


