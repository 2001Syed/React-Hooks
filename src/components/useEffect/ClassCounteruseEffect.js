import React, { Component } from 'react'

export default class ClassCounteruseEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} Times`
    }

    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} Times`
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>
            this.setState({count: this.state.count + 1})
        }>You Clicked {this.state.count} Times</button>
      </div>
    )
  }
}
