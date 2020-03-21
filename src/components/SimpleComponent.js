import React, { Component } from 'react';

export class SimpleComponent extends Component {
  constructor() {
    super();
    // Initial state here...
    this.state = {
      mood: 'happy',
    };
  }

  handleClick = () => {
    //   do some work to update the state
    this.state.mood === 'happy'
      ? this.setState({ mood: 'sad' })
      : this.setState({ mood: 'happy' });
    // this.setState({
    //   mood: 'sad',
    // });
  };

  // Return JSX that renders into HTML
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
        {/* <button onClick={this.handleClick}></button> */}
      </div>
    );
  }
}

export default SimpleComponent;
