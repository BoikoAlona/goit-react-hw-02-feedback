import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      
      const buttonId = event.target.id;

      return {
        [buttonId]: prevState[buttonId] + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button id="good" onClick={this.handleClick}>Good</button>
        <button id="neutral" onClick={this.handleClick}>Neutral</button>
        <button id="bad" onClick={this.handleClick}>Bad</button>
        <h1>Statistics</h1>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    )
  }
  
}
