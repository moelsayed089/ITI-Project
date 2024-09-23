import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Link as Router } from "react-router-dom";
import './navbar.css';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

function NavBar() {
  const { user } = useContext(AuthContext);

  const userLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <Navbar expand="lg" className="bg-body-secondary sticky-top" id='navbar'>
      <Container fluid>
        <Navbar.Brand as={Router} to={"/"} className='fs-3 fw-bold'>
          <span className="fs-2">E-</span>comm<span className="text-danger"><span className="fs-2">erce</span>one</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 column-gap-3 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Router} to={"/"} className='fw-bold'>Home</Nav.Link>
            {user && <>
              <Nav.Link href="#category" className='fw-bold'>Shop</Nav.Link>
              <Nav.Link href="#about" className='fw-bold'>About</Nav.Link>
              <Nav.Link href="#footer" className='fw-bold'>Contact</Nav.Link>
              <Nav.Link href="#products" className='fw-bold'>Products</Nav.Link>
              <Nav.Link as={Router} to={"/productcrud"} className='fw-bold'>Dashboard</Nav.Link>
            </>}
          </Nav>

          <Nav className='d-flex align-items-center'>
            {user ? (
              <>
                <button className="bg-dark text-white btn text-decoration-none py-2 px-3 rounded-2">
                  @{user.username}
                </button>
                <button onClick={userLogout} className="bg-danger text-white btn text-decoration-none py-2 px-3 ms-1 rounded-2">
                  Logout
                </button>
              </>
            ) : (
              <Link to={"/login"} className="bg-primary btn text-white text-decoration-none py-2 px-3 rounded-2">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
