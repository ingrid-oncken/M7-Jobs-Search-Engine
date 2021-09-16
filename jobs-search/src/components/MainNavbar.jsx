import { Navbar } from 'react-bootstrap'

const MainNavbar = () => (
  <Navbar bg="info" expand="lg">
    <Navbar.Brand href="#home" className="text-white font-weight-bold">
      Remote Job Search
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {/* <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
)

export default MainNavbar
