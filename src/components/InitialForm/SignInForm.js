import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
     
      return errors;
    },
    onSubmit: (values) => {},
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      
    
    </Form>
  );
};
export default SignInForm;
