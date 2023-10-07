import React, { Component } from 'react'

export default class ClassMouse extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

    logMousePosition = e => {
        this.setState({x: e.clientX , y: e.clientY})
    }

    componentDidMount() {
        window.addEventListener("mousemove" , this.logMousePosition)
    }
    

  render() {
    return (
      <div>
        <div style={{fontSize : "50px" , fontWeight : "bold"}}>
            X - {this.state.x}   Y - {this.state.y}
        </div>
      </div>
    )
  }
}
