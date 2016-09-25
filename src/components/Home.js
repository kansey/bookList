import React, { Component } from 'react';
import { Link } from 'react-router';



export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
            <ul>
                <li>
                    <Link to="">Add book to reading list</Link>
                </li>
                <li>
                    <Link to="">View my reading list</Link>
                </li>
                <li>
                    <Link to="">View my books read</Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}
