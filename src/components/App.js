import React, { useState } from 'react';
import Form from './Form';
import Table from './Table'

function App() {
  const [students, setStudens] = useState([]);
  const onSort = (sortBy) => {
    const newStudents = [...students];
    newStudents.sort((a, b) => a[sortBy] < b[sortBy] ? -1 : 1)
    console.log(newStudents)
    setStudens(
      newStudents
    )
  }

  const onSubmit = formData => {
    setStudens([
      ...students, formData
    ]);
  }
  return (
    <>
      <Form 
      onSubmit={onSubmit}
      />
      <Table 
      students={students}
      sortHandler={onSort}
      />
    </>
  )

}


export default App;