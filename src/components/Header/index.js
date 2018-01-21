import React, { Component } from 'react'
import './header.scss'
import backgrounds from '../../assets/backgrounds'

class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { backgroundIndex: 0 }
  // }
  // componentDidMount() {
  //   setInterval(() => this.updateBackground(), 2000)
  // }

  // updateBackground() {
  //   const newBackgroundIndex = (this.state.backgroundIndex + 1) % 2
  //   this.setState({ backgroundIndex: newBackgroundIndex })
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="a" src={backgrounds[0]} alt="" />
          <img className="b" src={backgrounds[1]} alt="" />
          <img className="c" src={backgrounds[2]} alt="" />
          <img className="d" src={backgrounds[3]} alt="" />
          <img className="e" src={backgrounds[4]} alt="" />
          <img className="f" src={backgrounds[5]} alt="" />
          <img className="g" src={backgrounds[6]} alt="" />
          <img className="h" src={backgrounds[7]} alt="" />
          <img className="i" src={backgrounds[8]} alt="" />
          <img className="j" src={backgrounds[9]} alt="" />
        </div>
      </div>
    )
  }
}

export default Header
