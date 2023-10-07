import React, { Component } from 'react'

export default class ClassCounteruseEffectCdn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0 , //Variable count initialize to 0.
         name : ""
      }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} Times`
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            console.log("Updating the document...");
            document.title = `Clicked ${this.state.count} Times`
        }
    }
    
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => {
            this.setState({name : e.target.value})
        }} />
        <button onClick={()=>
            this.setState({count: this.state.count + 1})
        }>You Clicked {this.state.count} Times</button>
      </div>
    )
  }
}
