import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/i.test(
          values.password
        )
      ) {
        errors.password = "Invalid password";
      }
      return errors;
    },
    onSubmit: (values) => {},
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formUsername">
          <Form.Label>Username ICON</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email ICON</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name = "email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password ICON</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name = "password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Choose a password between 8 to 15 characters which contain at least
            one lowercase letter, one uppercase letter, one numeric digit, and
            one special character.
          </Form.Text>
          
        </Form.Group>
      </Row>
      <Row>
        <Button type="submit">Submit form</Button>
      </Row>
    </Form>
  );
};
export default SignUpForm;
