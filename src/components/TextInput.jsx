import React, { Component } from "react";
export class TextInput extends Component {
  render() {
    return (
      <label for={this.props.name}>
        <span>{this.props.label}</span>
        <input
          name={this.props.name}
          type={this.props.type}
          required={this.props.required}
        />
      </label>
    );
  }
}
export default TextInput;
