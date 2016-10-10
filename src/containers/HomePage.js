import React, { Component } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

export default class HomePage extends React.Component {
  render() {
    return (
        <div className="back">
            <Header />
            <Home />
            <Footer />
      </div>
    );
  }
}
