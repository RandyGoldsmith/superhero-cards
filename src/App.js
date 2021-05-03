/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      superheros: []
    };

    
  }

  getRandomNumber = () => {
    return Math.floor((Math.random() * 10) + 1);
  }
  

  componentDidMount() {
    const proxyAPI = 'https://cors-anywhere.herokuapp.com/';
    const heroAPI = 'https://superheroapi.com/api/10165304001885245/';
    axios.get(`${proxyAPI}${heroAPI}${this.getRandomNumber()}`)
    .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <h1>Hello Randy</h1>
      </div>
    );
  }
}
  

export default App;
