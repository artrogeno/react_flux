import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'reactstrap'

const Home = () => {
  return (
    <Jumbotron fluid className="bg-dark">
      <Container fluid>
        <h1 className="display-3">
          React <span className="text-green-flux">Flux</span>{" "}
          <small className="text-info">Administration</small>
        </h1>
        <p className="lead">React, Flux, and React Router for web apps.</p>
        <hr className="my-2" />
        <p className="lead">
          <Link className="btn btn-outline-green-flux btn-lg" to="/courses">
            Go to courses
          </Link>
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Home
