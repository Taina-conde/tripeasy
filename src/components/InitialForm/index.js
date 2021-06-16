import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const InitialForm = () => {
  const [signUp, setSignUp] = useState(true)
  return <div>
      <h1>{signUp ? "Create your account" : "Sign in "}</h1>
      {signUp ? <SignUpForm/> : <SignInForm/>}

  </div>;
};
export default InitialForm;