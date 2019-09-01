import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'

import Header from 'shared/components/header'
import NotFound from 'app/pages/notfound'
import Home from 'app/pages/home'
import About from 'app/pages/about'
import Courses from 'app/pages/courses'
import ManageCourse from 'app/pages/courses/manage'

const App = props => (
  <>
    <Header {...props} />
    <Container fluid className="container-app pl-0 pr-0">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/course/:slug" component={ManageCourse} />

        <Redirect from="/home" to="/" />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </>
)

export default App
