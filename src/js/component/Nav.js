import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Nav extends React.Component
{
  render()
  {
    return (
      <ul>
        <li>
          <IndexLink to="/">Home</IndexLink>
        </li>
        <li>
          <Link to="foo">Foo</Link>
        </li>
        <li>
          <Link to="bar">Bar</Link>
        </li>
        <li>
          <Link to="baz">Baz</Link>
        </li>

        <li>
          <IndexLink to="/red">Red Home</IndexLink>
        </li>
        <li>
          <Link to="/yellow/foo">Yellow Foo</Link>
        </li>
        <li>
          <Link to="/green/bar">Green Bar</Link>
        </li>
        <li>
          <Link to="/blue/baz">Blue Baz</Link>
        </li>
      </ul>
    );
  }
}
