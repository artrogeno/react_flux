import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, FormFeedback, Label, Input } from 'reactstrap'

const SelectInput = props => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input
        id={props.id}
        type="select"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        invalid={props.error.length > 0}>
        {props.children}
      </Input>
      {props.error.length > 0 && (
        <FormFeedback>{props.error}</FormFeedback>
      )}
    </FormGroup>
  )
}

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  error: PropTypes.string
}

SelectInput.defaultProps = {
  error: ''
}

export default SelectInput
