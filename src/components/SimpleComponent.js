import React, { Component } from 'react';

export class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy',
    };
  }

  handleClick = () => {
    this.state.mood === 'happy'
      ? this.setState({ mood: 'sad' })
      : this.setState({ mood: 'happy' });
    // this.setState({
    //   mood: 'sad',
    // });
  };

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
