/**
*
* Login
*
*/

import React from 'react';
import validator from "email-validator";

import styles from './styles.css';
import TextInput from "../TextInput";

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const email = this.emailField.value();

    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email.'
      });
      return;
    }

    this.setState({
      errorText: null,
    });

    this.props.login(email);
  }

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login
        </div>
        <TextInput
          placeholder="Your email"
          ref={(f) => this.emailField = f}
          errorText={this.state.errorText} />

        <div className={styles.actionsContainer}>
          <div
            className={styles.button}
            onClick={this.props.cancelLogin} >
            Cancel
          </div>
          <div 
            className={styles.button}
            onClick={this.login}>
            Log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
