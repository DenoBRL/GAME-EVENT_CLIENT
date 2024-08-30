import Container from "react-bootstrap/Container";
import LoginForm from "../../../components/admin/auth/login/LoginForm.jsx";
import Menu from "../../../components/admin/menu/Menu.jsx";

function Login() {
  return (
    <div>
      <Menu />
      <br />
      <Container fluid className="loginContainer">
        <LoginForm />
      </Container>
    </div>
  );
}

export default Login;