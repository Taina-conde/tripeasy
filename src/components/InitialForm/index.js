import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Container from "react-bootstrap/Container";

const InitialForm = () => {
  const [signUp, setSignUp] = useState(true)
  return <Container>
      <h1>{signUp ? "Create your account" : "Sign in "}</h1>
      {signUp ? <SignUpForm/> : <SignInForm/>}

  </Container>;
};
export default InitialForm;