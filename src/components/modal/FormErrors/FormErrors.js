import React from 'react'
import classes from '../modal.module.css'

const FormErrors = ({formErrors}) =>
  <div className={classes.modal__error}>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors