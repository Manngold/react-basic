import React, { PureComponent } from 'react';

class Header extends PureComponent {
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
