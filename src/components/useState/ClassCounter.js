import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
     this.state = {
        count : 0
      }
    }
    IncrementCounter = () => {
        this.setState({  // ensures that the component has been updated and calls for re-rendering of the component. setState is asynchronous call means if synchronous call get called it may not get updated at right time like to know current value of object after update using setState it may not get give current updated value on console.
            count : this.state.count + 1
        })
       }
    
  render() {
    return (
      <div>
        <button onClick={this.IncrementCounter}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
