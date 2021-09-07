import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="header__components">
      <Container>
        <Navbar.Brand href="/">
          <AiFillGithub size={48}></AiFillGithub>
          <span className="ms-3">Github User Search</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Link className="text-center" to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;