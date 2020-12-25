import { useState } from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import './Navbar.css';


function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar scrolling bg='light' fixed='top'>
            <Navbar.Brand href="#home">
                {/* PUT NAVBAR LOGO HERE EVEN IF IT LOOKS OLD */}
                <img class="navLogo" alt="" src="https://vectr.com/napolo/h1ksE5GudR.svg?width=430&height=120&select=h1ksE5GudRpage0" className="d-inline-block align-top" />{' '}
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#WhoWeAre">Who We Are</Nav.Link>
                <Nav.Link href="#TraineeProgram">Trainee Program</Nav.Link>
                <Nav.Link href="#InternProgram">Intern Program</Nav.Link>
                <Nav.Link href="#ApplyToHost">Apply to Host</Nav.Link>
            </Nav>
            <>
                <Button variant="primary" onClick={handleShow}>Login/Sign Up</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login title (Logo maybe) </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Body of the login section (fill with forms)</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Navbar>
    )
}

export default NavBar;