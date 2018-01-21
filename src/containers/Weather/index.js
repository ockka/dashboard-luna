import { connect } from 'react-redux'
import React, { Component } from 'react'
import Weather from '../../components/Weather'
import { fetchWeather } from '../../actions/actions'

const mapStateToProps = state => ({
  weatherData: state.weatherData.data,
})

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => dispatch(fetchWeather()),
})

class WeatherContainer extends Component {
  constructor(props) {
    super(props)
    props.fetchWeather()
  }
  render() {
    return this.props.weatherData.main ? <Weather weatherData={this.props.weatherData} /> : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
