import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserService from '../service/UserServise';
import { useNavigate } from 'react-router-dom';

function CNavbar() {
  const navigate = useNavigate();
  const signout = (e)=>{
    e.preventDefault() ;
    UserService.signout().then(() => {
    navigate('/signin'); })
}



  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">To-Do-LIST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="list">Tasks</Nav.Link>
            <Nav.Link href="addtask">Add Task</Nav.Link>
            <Nav.Link href="signin" style={{marginLeft:"900px"}} onClick={(e)=>signout(e)}>Signout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default CNavbar;