import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpButton  from "./SignUpButton";
import LoginButton  from "./LoginButton";
import { HiMail, HiUser, HiLockClosed } from "react-icons/hi";

const SignUpForm = (props) => {
    const { onToggleSignUp } = props;
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
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formUsername">
        <Form.Label column xs={1} className="p-0 text-right">
          <HiUser size={20} />
        </Form.Label>
        <Col xs={11}>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={
              formik.touched.username && !!Boolean(formik.errors.username)
            }
            isValid={formik.touched.username && !formik.errors.username}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formEmail">
        <Form.Label column xs={1} className="p-0 text-right ">
          <HiMail size={20} />
        </Form.Label>
        <Col xs={11}>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.touched.email && !!Boolean(formik.errors.email)}
            isValid={formik.touched.email && !formik.errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPassword">
        <Form.Label column xs={1} className="p-0 text-right ">
          <HiLockClosed size={20} />
        </Form.Label>
        <Col xs={11}>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={
              formik.touched.password && !!Boolean(formik.errors.password)
            }
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Choose a password between 8 to 15 characters which contain at least
            one lowercase letter, one uppercase letter, one numeric digit, and
            one special character.
          </Form.Text>
        </Col>
      </Form.Group>

      <Row className = "justify-content-center">
        <Col xs = {4} md ={12} className = "text-right text-md-center p-0">
          <SignUpButton onToggleSignUp = {onToggleSignUp}/>
        </Col>
        <Col xs = {1} md ={12} className = "text-center p-0">or</Col>
        <Col xs = {4} md ={12} className = "text-md-center p-0">
          <LoginButton  onToggleSignUp = {onToggleSignUp}/>
        </Col>
      </Row>
    </Form>
  );
};
export default SignUpForm;
