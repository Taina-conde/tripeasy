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
      <h1>{signUp ? "Create your account" : "Sign in "}</h1>
      {signUp ? (
        <SignUpForm onToggleSignUp={toggleSignUpHandler} />
      ) : (
        <SignInForm onToggleSignUp={toggleSignUpHandler} />
      )}
    </Container>
  );
};
export default InitialForm;
