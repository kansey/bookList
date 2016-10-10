import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/HomePage.css';



export default class Home extends React.Component {
  render() {
    return (
      <div className="ul-container">
            <ul>
                <li className="li-content">
                    <Link to="/add" className="content">Add book to reading list</Link>
                </li>
                <li className="li-content">
                    <Link to="" className="content">View my reading list</Link>
                </li>
                <li className="li-content">
                    <Link to="" className="content">View my books read</Link>
                </li >
            </ul>

      </div>
    );
  }
}
