import React, { Component } from "react";
export class Checkbox extends Component {
  render() {
    return (
      <label className="checkbox">
        <input type="checkbox" />
        <span className="check" />
        <span>{this.props.label}</span>
      </label>
    );
  }
}
export default Checkbox;
