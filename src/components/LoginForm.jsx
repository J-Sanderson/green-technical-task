import React, { Component } from 'react';
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Button from './Button'
export class LoginForm extends Component {
  render() {
    return (
      <form>
        <TextInput label="Email Address" name="email" type="email" required="true" />
        <Checkbox label="Remember this device" />
        <Button text="Sign in" />
      </form>
    );
  }
}
export default LoginForm;