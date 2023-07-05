import { Nav, Navbar } from 'react-bootstrap';
import { IoIosArrowBack, IoIosMic, IoIosSettings } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  const location = useLocation();
  let title = 'Home';

  if (location.pathname === '/') {
    title = 'Meals';
  } else if (location.pathname.startsWith('/about/')) {
    title = 'About';
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/"><IoIosArrowBack fill="white" /></Nav.Link>
      </Nav>
      <Navbar.Brand className="mx-auto">
        <p className="text-center" style={{ height: '1rem' }}>{title}</p>
      </Navbar.Brand>
      <Nav>
        <IoIosMic fill="white" style={{ marginRight: '0.5rem' }} />
        <IoIosSettings fill="white" style={{ marginRight: '2rem' }} />
      </Nav>
    </Navbar>
  );
};

export default Navigation;
