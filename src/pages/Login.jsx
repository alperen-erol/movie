import React, { useContext, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import icon from "../assets/icons/google.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUpProvider } = useContext(AuthContext);
  const handleSubmit = (e) => {
    
    signIn(email, password);
  };
  return (
    <div className="logincontainer">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center  ">Sign In</h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="mt-1 d-flex justify-content-between ">
                          <Link to="/login" className="text-primary fw-bold">
                            Forgot your password?
                          </Link>
                          <Link to="/register" className="text-primary fw-bold">
                            Sign Up
                          </Link>
                        </p>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Sign In
                        </Button>
                      </div>
                      <div className="mt-4 d-grid">
                        <Button
                          variant="secondary"
                          className=" d-flex  justify-content-center align-items-center p-3"
                          onClick={() => signUpProvider()}
                        >
                          Continue With Google
                          <div className="mr-4 w-25">
                            <img src={icon} alt="googleIcon" className="" />
                          </div>
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3"></div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
