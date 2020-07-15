import React, { Component } from 'react'
import { Header, Cards, Charts, CountryPick } from './components'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css'

export class App extends Component {
  render() {
    return (
      <Router>
      <div className={ styles.container }>
        <Header />
        
      </div>
      </Router>
    )
  }
}

export default App
