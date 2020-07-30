import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = class ButtonLink extends Component {
  render() {
    return (
      <Link className={this.props.className} to={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
};

export default ButtonLink;
