import React from 'react';
import Nav from './Nav';

export default class Layout extends React.Component
{
  render()
  {
    const containerStyle =
    {
      backgroundColor: this.props.routeParams.color || 'inherit'
    }
    return (
      <div style = {containerStyle}>
        <Nav location = {this.props.location} />
        {this.props.children}
      </div>
    );
  }
}
