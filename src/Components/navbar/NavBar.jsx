import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
   return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand
                  style={{ position: 'absolute', left: 80 }}
                  href="#feed"
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
                  <Nav.Link href="#feed">Feed</Nav.Link>
                  <Nav.Link href="#search">Search</Nav.Link>
                  <Nav.Link href="#post">Post</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
               </Nav>
               <Navbar.Collapse style={{position: 'absolute', right: 80}} className="justify-content-end">
                  <Navbar.Text>
                     Signed in as: <a href="#login">TEST USER</a>
                  </Navbar.Text>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default NavBar;
