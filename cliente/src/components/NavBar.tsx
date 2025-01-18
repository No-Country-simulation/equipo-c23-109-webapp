import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-blue-600 flex ">
            <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto flex justify-between items-center">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Solicitar Préstamo</Nav.Link>
                        <Nav.Link href="#link">Invertir</Nav.Link>
                        <Nav.Link href="#link">Iniciar Sesion</Nav.Link>
                        <Nav.Link href="#link">Registrarse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar