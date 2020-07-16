import React, { Component } from 'react'
import { Header, Cards, Charts, CountryPick } from './components'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchData } from './api'
import styles from './App.module.css'

export class App extends Component {
   state = {
      data: {},
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <Router>
      <div className={ styles.container }>
        <Header />
        <Cards data={ data }/>
      </div>
      </Router>
    )
  }
}

export default App
