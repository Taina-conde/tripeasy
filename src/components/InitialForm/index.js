import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./LoginForm";
import Container from "react-bootstrap/Container";

const InitialForm = () => {
  const [signUp, setSignUp] = useState(true);

  const toggleSignUpHandler = () => {
    setSignUp(!signUp);
  };
  return (
    <Container>
      <h1>
        <span>Trip</span>
        <span>Easy</span>
      </h1>
      <h2>{signUp ? "Create your account" : "Sign in "}</h2>
      {signUp ? (
        <SignUpForm onToggleSignUp={toggleSignUpHandler} />
      ) : (
        <SignInForm onToggleSignUp={toggleSignUpHandler} />
      )}
    </Container>
  );
};
export default InitialForm;
