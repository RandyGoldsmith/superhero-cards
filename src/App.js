/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardList from './components/CardList/card-list-component'
import axios from 'axios';




class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
  }



  getRandomNumber = () => {
    return Math.floor((Math.random() * 10) + 1);
  }
  

  componentDidMount() {
    //const proxyAPI = 'https://cors-anywhere.herokuapp.com/';
    const heroAPI = 'http://private-anon-3ee6a03d25-superheroes.apiary-mock.com/characters/';
    axios.get(`${heroAPI}`)
    .then(response => this.setState({ heroes: response.data.Characters}))
  }

  render() {


    return (
        <CardList heroes={this.state.heroes}/>
    );
  }
}
  

export default App;
