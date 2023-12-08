import Link from "next/link";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ padding: "1rem", borderBottom: "1px solid #030303", fontSize: "1.1rem" }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "#0dcaf0", marginRight: "2rem" }}>
            My <br /> Portfolio
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link href="https://github.com/devhiko">
            <Button style={{ borderRadius: 0 }} variant="outline-info">
              GitHub
            </Button>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      <div>{children}</div>

      <Navbar bg="dark" expand="lg" variant="dark" style={{ padding: "1rem", borderTop: "1px solid #030303" }}>
        <Container style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <Navbar.Brand href="/" style={{ color: "#b3b3b3" }}>
            Designed and developed by <span className="text-[#0dcaf0]">me</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
