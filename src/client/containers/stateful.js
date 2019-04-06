import React from 'react';

class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    let newCount = this.state.counter + 1;
    this.setState({ counter: newCount });
  }

  render() {
    return(
      <div>
        <h2>Click the number!</h2>
        <div onClick={this.handleClick}>{this.state.counter}</div>
      </div>
    )
  }
}

export default Stateful;
