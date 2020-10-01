import React, { Component } from "react";
import LoginForm from "./LoginForm";
export class Main extends Component {
  render() {
    return (
      <main>
        <img
          src="https://cdn.glitch.com/e3829a11-1daa-481c-9212-2fdb41e8f79d%2Flogo-r.svg?v=1601544599400"
          alt="Green logo"
          className="logo"
        />
        <h1>Example login screen</h1>
        <h2>Getting started with Green.</h2>
        <LoginForm />
      </main>
    );
  }
}
export default Main;
