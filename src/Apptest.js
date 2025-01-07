import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Row, Col, Card, Form, FormGroup } from 'react-bootstrap';
import './overrride.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">리액트예제</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Service</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Welcome */}
      <div className='bg-primary text-white py-5'>
        <Container>
          <h1>환영합니다 예제 페이지 입니다.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dignissimos cum vel, beatae saepe perferendis? Aspernatur, sequi. Magni nobis accusantium molestiae deserunt quae, dolorem nesciunt dicta adipisci sint quod nam!
          </p>
          <Button variant='light' href='#services'>더보기</Button>
        </Container>
      </div>
      {/* About Section */}
      <section id='about' className='py-5'>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid mollitia sed reprehenderit officiis culpa asperiores nemo? Natus maiores doloribus impedit vel eligendi ipsum beatae, distinctio, hic esse ea vitae.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <img src="https://i.ytimg.com/vi/zloUPfLQePQ/sddefault.jpg" alt="" 
              className='img-fluid rounded'

              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Service Section */}
      <section id='service' className='py-5 bg-info'>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} >
              <Card className='text-center'>
                <Card.Body>
                  <Card.Title>제목입니다1</Card.Title>
                  <Card.Text>내용입니다 1-1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className='text-center'>
                <Card.Body>
                  <Card.Title>제목입니다1</Card.Title>
                  <Card.Text>내용입니다 1-1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className='text-center'>
                <Card.Body>
                  <Card.Title>제목입니다1</Card.Title>
                  <Card.Text>내용입니다 1-1</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Section */}
      <section id='contact' className='py-5'>
        <Container>
        <h2 className='text-right'>Contact Us</h2>
        <Row>
          <Col md={7}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"   placeholder='이름입력하세요'>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email"   placeholder='이메일입력하세요'>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>메세지입력</Form.Label>
                <Form.Control type="textarea"   placeholder='메세지입력하세요'>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md={5}>
          <h5>Contact Info</h5>
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Phone:</strong> +123456789</p>
              <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </Col>
        </Row>
        </Container>
      </section>
      {/* Footer */}
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
