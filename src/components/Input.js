import React, { useState } from 'react';

function Input({label, type, valueChange, name, value}) {

  

 return (
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">{label}</label>
    <div className="col-sm-6">
      <input
        value={value}
        type={type} 
        name={name}
        className="form-control" 
        id="inputEmail3"
        onChange={valueChange}
       >
      </input>
    </div>
  </div>
 )
}


export default Input;