import React, { Component } from 'react';

class ColumnFooter extends Component {
  render() {
    return (
      <>
        {this.props.data.map(({title,links}, i) => {
        return (
          <div key={i}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ LinkName, LinkUrl }, i) => {
                return (
                  <li key={i}>
                    <a href={LinkUrl}>{LinkName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
        })}
        </>
    );
  }
}

export default ColumnFooter;
