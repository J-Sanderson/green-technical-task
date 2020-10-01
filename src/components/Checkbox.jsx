import React, { Component } from "react";
export class Checkbox extends Component {
  render() {
    return (
      <label>
        <input type="checkbox" />
        <span>{this.props.label}</span>
      </label>
    );
  }
}
export default Checkbox;
