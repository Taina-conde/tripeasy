import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./LoginForm";
import Container from "react-bootstrap/Container";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InitialForm = () => {
  const [signUp, setSignUp] = useState(true);

  const toggleSignUpHandler = () => {
    setSignUp(!signUp);
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>
            <span className="logo-trip">Trip</span>
            <span className="logo-easy">Easy</span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{signUp ? "Create your account" : "Sign in "}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {signUp ? (
            <SignUpForm onToggleSignUp={toggleSignUpHandler} />
          ) : (
            <SignInForm onToggleSignUp={toggleSignUpHandler} />
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default InitialForm;
