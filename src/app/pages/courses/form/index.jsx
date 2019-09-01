import React from 'react';
import PropTypes from 'prop-types'
import { Container, Form, FormGroup, Button } from 'reactstrap'

import TextInput from 'shared/components/textinput'
import SelectInput from 'shared/components/selectinput'

const CourseForm = props => {
  return (
    <Container fluid>
      <Form onSubmit={props.onSubmit}>
        <TextInput
          label="Title"
          id="title"
          name="title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
          />

        <FormGroup>
          <SelectInput
            label="Author"
            id="authorId"
            name="authorId"
            value={props.course.authorId || ''}
            onChange={props.onChange}
            error={props.errors.authorId} >
            <option>-- Select --</option>
            <option value="1">Arthur Costa</option>
            <option value="2">Joaquim do Nascimento</option>
          </SelectInput>
        </FormGroup>

        <TextInput
          label="Category"
          id="category"
          name="category"
          value={props.course.category}
          onChange={props.onChange}
          error={props.errors.category}
          />

        <FormGroup check row>
          <Button type="submit" value="save" color="primary">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default CourseForm
