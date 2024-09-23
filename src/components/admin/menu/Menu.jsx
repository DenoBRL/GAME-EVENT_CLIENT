// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.png';
// import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-dark">
            <Container>
                <Navbar.Brand href="/">
                <img
                  alt="logo"
                  src={logo}
                  className="logoHomePage"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/register">Inscription</Nav.Link>
                        <Nav.Link href="/login">Connexion</Nav.Link>
                        <Nav.Link href="/user">Profil</Nav.Link>
                        <Nav.Link href="/logout">Déconnexion</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            className="me-2"
                            aria-label="Recherche"
                        />
                        <Button variant="outline-primary">Recherche</Button>
                    </Form> */}
                </Navbar.Collapse>
           </Container>
        </Navbar>
    );
}

export default NavScrollExample;