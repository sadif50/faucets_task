import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {AiOutlineUser} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='py-3 bg-white'>
      <Container>
        <Navbar.Brand href="/" className='fw-semibold fs-3 text-primary p-0'>Faucets</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <NavDropdown className='custom-btn' title="Ethereum Kovan" id="navbarScrollingDropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='custom-btn'>Connect Wallet</Nav.Link>
            <NavDropdown className='custom-user' title={<AiOutlineUser/>} id="navbarScrollingDropdown">
              <Link className='dropdown-item' to='/login'>Login</Link>
              <Link className='dropdown-item' to='/signup'>Sign Up</Link>
              <Link className='dropdown-item' to='/faq'>FAQ</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;