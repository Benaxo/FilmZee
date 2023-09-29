import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
        <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src="/Movio.png"
                width="80"
                height="80"
                alt="Logo de Movio"
            />
            <span style={{ marginLeft: '-15px' }}>FilmZee</span>
        </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/">Accueil</NavLink>
                    <NavLink className ="nav-link" to="/watchList">Liste d'envie</NavLink>      
                </Nav>
                <Button variant="outline-info" className="me-2">Connexion</Button>
                <Button variant="outline-info">Inscription</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header