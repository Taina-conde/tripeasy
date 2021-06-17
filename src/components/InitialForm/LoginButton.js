import Button from "react-bootstrap/Button";
const LoginButton = (props) => {
    const { onToggleSignUp } = props;
    return (
        <Button type="button" onClick = {() => onToggleSignUp()}>
            Login
        </Button>
    )
}
export default LoginButton;