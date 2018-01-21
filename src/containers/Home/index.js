import React, { Component, Fragment } from 'react'
import Header from '../../components/Header'
import FlipClock from '../../components/FlipClock'
import WeatherContainer from '../Weather'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <FlipClock />
        <WeatherContainer />
      </Fragment>
    )
  }
}

export default Home
