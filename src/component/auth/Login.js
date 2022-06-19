import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { authenticate, userLogin } from "../backend/Auth";
import Base from "../home/Base";

function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({
    error: "",
    message: "",
    loading: false,
    doRedirect: false,
  });
  const { error, message, loading, doRedirect } = response;

  const { email, password } = info;

  const handleChange = name => e => {
    setInfo({ ...info, [name]: e.target.value });
  };
  const performRedirect = () => {
    return <Redirect to="/" />;
  };
  const handleClick = () => {
    setResponse({ ...response, message: "", error: "", loading: true });
    userLogin(info)
      .then(res => {
        if (res.statusCode === "OK" || res.statusCode === 200) {
          authenticate(res, () => {
            setResponse({ ...response, doRedirect: true });
          });
        } else {
          setResponse({
            ...response,
            message: "",
            error: res.error,
            loading: false,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Base>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            {doRedirect && performRedirect()}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange("email")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Login;
