/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import SingleCard from './components/Card/card-component';
import { CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';



class App extends Component {
  


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
      <CardDeck style={{ margin: '10px'}}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </CardDeck>
    );
  }
}
  

export default App;
