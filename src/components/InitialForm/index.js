import React, {useState} from "react";

const InitialForm = () => {
  const [signUp, setSignUp] = useState(true)
  return <div>
      <h1 className = "display-6">{signUp ? "Create your account" : "Sign in "}</h1>
  </div>;
};
export default InitialForm;