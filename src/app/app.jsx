import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Header from 'shared/components/header'
import Home from 'app/pages/home'

const App = props => (
  <>
    <Header {...props} />
    <Container fluid className="container-app">
        <Route path="/" exact component={Home} />
    </Container>
  </>
)

export default App
