import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Carousel, Card, Modal, Row, Col } from 'react-bootstrap';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const books = [
    {
      title: "Book Title 1",
      author: "Author 1",
      price: "$10",
      description: "This is a brief description of Book 1.",
      cover: "https://via.placeholder.com/150"
    },
    {
      title: "Book Title 2",
      author: "Author 2",
      price: "$12",
      description: "This is a brief description of Book 2.",
      cover: "https://via.placeholder.com/150"
    },
    {
      title: "Book Title 3",
      author: "Author 3",
      price: "$15",
      description: "This is a brief description of Book 3.",
      cover: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      {/* Header with Navbar */}
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand href="#">Book Nook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#books">Books</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#fiction">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#nonfiction">Non-Fiction</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#bestsellers">Best Sellers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact" onClick={handleShowContact}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="primary" className="ms-2" onClick={handleShowSignIn}>
              Sign In
            </Button>
            <Button variant="secondary" className="ms-2" onClick={handleShowSignUp}>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/67192467773215.5b45be0506794.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://getwalls.io/wallpapers/340306/2021--12--library-aesthetic-wallpapers-632422843-pc.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i1.wp.com/first10em.com/wp-content/uploads/2018/12/2018-book-list.jpg?fit=1024%2C576&ssl=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Book Cards */}
      <Container className="mt-4">
        <Row>
          {books.map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={book.cover} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>by {book.author}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                  <Button variant="primary" className="me-2">Add to Cart</Button>
                  <Button variant="secondary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Contact Modal */}
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      <footer className="footer mt-auto py-3">
        <div className="container">
          <Row>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Terms of Service</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">FAQ</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Facebook</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Twitter</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Instagram</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          Â© 2024 Book Nook
        </div>
      </footer>
    </div>
  );
}

export default App;
