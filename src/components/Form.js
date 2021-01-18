import React, { useState, useCallback } from 'react';
import Input from "./Input";

function Form({onSubmit}) {
  const initialState = {
    name: '',
    surname: '',
    birthday: '',
    startEdu: '',
    faculty: '',
  }

  const[formData, setFormData] = useState({
    ...initialState
  });

  const valueChange = useCallback(e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  },[formData])
  
  function handler (e) {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      ...initialState
    })
  }

  return (
    <div className='container-fluid'>
      <form type='submit'>
        <Input
          type='text' 
          label='Имя'
          name='name'
          value={formData.name}
          valueChange={valueChange}
        />
        <Input
          type='text' 
          label='Фамилия'
          name='surname'
          value={formData.surname}
          valueChange={valueChange}
        />
        <Input
          type='date' 
          label='Год рождения'
          name='birthday'
          value={formData.birthday}
          valueChange={valueChange}
        />
        <Input
          type='date' 
          label='Начало обучения'
          name='startEdu'
          value={formData.startEdu}
          valueChange={valueChange}
        />
        <Input
          type='text' 
          label='Факультет'
          name='faculty'
          value={formData.faculty}
          valueChange={valueChange}
        />
        <div className="form-group row">
          <div className="col-sm-10">
            <button 
              className="btn btn-primary"
              type='submit'
              onClick={handler}
            >
              Add student
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;