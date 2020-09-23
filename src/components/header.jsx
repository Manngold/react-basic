import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <span>Habit tracker</span>
        <span>{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Header;
