import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import FanArt from "./pages/FanArt";
import "bootstrap/dist/css/bootstrap.min.css";
import "./overrride.css";
function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* 로고는 왼쪽에 고정 */}
          <Navbar.Brand href="/">둘리 월드</Navbar.Brand>

          {/* 네브 바 메뉴는 오른쪽 정렬 */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {" "}
              {/* ms-auto로 오른쪽 정렬 */}
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/fanart">Fan Art</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="fanart" element={<FanArt />} />
        </Routes>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2025 둘리 월드. All Rights Reserved.</p>
              <p>
                <a href="/" className="text-white">
                  Privacy Policy
                </a>{" "}
                |
                <a href="/" className="text-white">
                  {" "}
                  Terms of Service
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
