import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    {/* use otherprops spreder to pass in email and password attributes */}
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
    //   USE THE SHRINK PROPERTY ONCE USER TYPED ANYTHING (autocomplete browser)
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >{label}</label>
    ) : null}
  </div>
);

export default FormInput