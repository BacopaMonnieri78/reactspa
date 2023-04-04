import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

export const NavigationComponent = () => {
    return (
        <>
          <Navbar >
            <Container>
              <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
              <Nav className="mt-auto">
                <Nav.Link as={Link} to='/' >Home</Nav.Link>
                <Nav.Link as={Link} to= '/counter'>Counter</Nav.Link>
                <Nav.Link as={Link} to='/testing'>Testing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    )
}