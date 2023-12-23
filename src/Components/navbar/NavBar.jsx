import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export const NavBar = () => {
   return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand
                  as={Link}
                  to="/"
                  style={{ position: 'absolute', left: 80 }}
               >
                  <img
                     alt=""
                     src="/public/icon-white.png"
                     style={{ marginRight: 10 }}
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                  />{' '}
                  MicroMsg
               </Navbar.Brand>
               <Nav style={{ margin: 'auto' }} className="me-auto">
                  <Nav.Link as={Link} to="/about">Feed</Nav.Link>
                  <Nav.Link as={Link} to="/search">Search</Nav.Link>
                  <Nav.Link as={Link} to="/post">Post</Nav.Link>
                  <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
               </Nav>
               <Navbar.Collapse
                  style={{ position: 'absolute', right: 80 }}
                  className="justify-content-end"
               >
                  <Navbar.Text>
                     Signed in as: <Link to="/login">TEST USER</Link>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default NavBar;
