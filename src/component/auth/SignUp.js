import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

function SignUp() {

    const [info, setInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })
    const [resp, setResp] = useState({
        error: "",
        message: "",
        loading: false,

    })
    const { error, message, loading } = resp;

    const { first_name, last_name, email, password } = info;

    const handleFirstName = e => {
        setInfo({ ...info, first_name: e.target.value })
    }
    const handleLastName = e => {
        setInfo({ ...info, last_name: e.target.value })
    }

    const handleEmail = e => {
        setInfo({ ...info, email: e.target.value })

    }

    const handlePassword = e => {
        setInfo({ ...info, password: e.target.value })
    }

    const handleChange = name => e => {
        setInfo({ ...info, [name]: e.target.value })

    }



    const handleClick = () => {
        createuser(info).then(res => {

        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <Container>

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    {loading && <Cutomg
                    }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" onChange={handleFirstName} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter lastname" onChange={handleLastName} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleClick}>
                            Submit
  </Button>
                    </Form>

                </Col>
            </Row>
        </Container>


    )
}

export default SignUp
