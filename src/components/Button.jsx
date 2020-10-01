import React, { Component } from "react";
export class Button extends Component {
  render() {
    return (
      <button
        className="button"
        type={this.props.type}
        value={this.props.text}
      >
        {this.props.text}
      </button>
    );
  }
}
export default Button;
