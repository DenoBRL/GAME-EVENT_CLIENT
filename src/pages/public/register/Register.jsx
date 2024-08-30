import Container from "react-bootstrap/Container";
import RegisterForm from "../../../components/admin/auth/register/RegisterForm.jsx";
import Menu from "../../../components/admin/menu/Menu.jsx";

function Register() {
  return (
    <div>
      <Menu />
      <br />
      <Container fluid className="loginContainer">
        <RegisterForm />
      </Container>
    </div>
  );
}

export default Register;