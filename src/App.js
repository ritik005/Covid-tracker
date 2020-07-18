import React, { Component } from 'react'
import { Header, Cards, Charts, CountryPick } from './components'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchData } from './api'
import styles from './App.module.css'
export class App extends Component {
   state = {
      data: {},
      country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  } 
  
  render() {
    const { data, country } = this.state;
    return (
      <Router>
        <Header />
          <div className={ styles.container }>
            <Cards data={ data }/>
            <h2 className={styles.h2}> Pick a Country </h2>
            <CountryPick handleCountryChange={ this.handleCountryChange } />
            <h2> Charts </h2>
            <Charts  data={data} country={country}/>
          </div>
      </Router>
    )
  }
}

export default App
