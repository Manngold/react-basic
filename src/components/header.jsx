import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <span>Habit tracker</span>
        <span>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
