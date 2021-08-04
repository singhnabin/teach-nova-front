import React, { Children, useState } from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Index({ children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row>
      <Col>
        <div className="admin">
          <div className="canvas_button">
            <Button variant="info" onClick={() => handleShow()}>
              click me
            </Button>
          </div>
          <div className="admin__sidebar">
            <div className="admin__sidebar__list">
              <Link to="/createCate">Create Category</Link>

              <Link to="/manageCate">Manage Category</Link>

              <Link to="/createProduct">Create Product</Link>

              <Link to="/manageProduct">Manage Product</Link>
            </div>
          </div>
          <div className="admin__main">{children}</div>
        </div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: "rgb(4, 28, 51)" }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="admin__canvas">
              <div className="admin__canvas__list">
                <Link to="/createCate">Create Category</Link>

                <Link to="/manageCate">Manage Category</Link>

                <Link to="/createProduct">Create Product</Link>

                <Link to="/manageProduct">Manage Product</Link>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Col>
    </Row>
  );
}

export default Index;
