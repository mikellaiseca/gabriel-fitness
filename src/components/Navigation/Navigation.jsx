import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from 'react';
import './Navigation.css'

const Navigation = () => {

    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handler = () => {
            setShrunk((isShrunk) => {
                if (
                    !isShrunk &&
                    (document.body.scrollTop > 40 ||
                        document.documentElement.scrollTop > 40)
                ) {
                    return true;
                }

                if (
                    isShrunk &&
                    document.body.scrollTop < 10 &&
                    document.documentElement.scrollTop < 10
                ) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (

        <Navbar expand="lg" sticky='top' className={isShrunk ? 'navigation active' : 'navigation'}>
            <Container>
                <Navbar.Brand href="/" className="brand">GabrielFitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="navlinks" href="/tienda">Programas de entrenamiento</Nav.Link>
                        <Nav.Link className="navlinks" href="/sobre-mi">Sobre mí</Nav.Link>
                        <Nav.Link className="navlinks" href="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )

}

export default Navigation