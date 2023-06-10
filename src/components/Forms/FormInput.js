import React from 'react'
import classes from './Forms.module.css'
const FormInput = (props) => {
  const {label,errorMessage,onChange,id, ...inputProps}=props
  return (
    <div className={classes.formInputs}>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} className={classes.inputs}
      />
      <span className={classes.span}>{errorMessage}</span>
    </div>
  )
}

export default FormInput