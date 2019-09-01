import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormFeedback, Label, Input } from 'reactstrap'

const TextInput = props => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input
        id={props.id}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        invalid={props.error.length > 0}/>
      {props.error.length > 0 && (
        <FormFeedback>{props.error}</FormFeedback>
      )}
    </FormGroup>
  )
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
}

TextInput.defaultProps = {
  error: ''
}

export default TextInput
