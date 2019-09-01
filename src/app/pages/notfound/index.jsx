import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

const NotFound = () => (
  <Container>
    <Row className="d-flex justify-content-center pt-5">
      <Col md={6} className="text-center">
        <h1>Page Not Found</h1>
        <p className="pt-3">
          <Link className="btn btn-outline-green-flux btn-lg" to="/">Back to Home</Link>
        </p>
      </Col>
    </Row>
  </Container>
)

export default NotFound
