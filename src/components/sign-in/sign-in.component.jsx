import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
// import "./form-input.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <label htmlFor=""></label>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <label htmlFor=""></label>
          
          <div className="buttons">
          <CustomButton type="submit" value="Submit Form" >Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn value="Google SignIn" >Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
