import React, { useState, useCallback } from 'react';
import Input from "./Input";

const Table = ({students, sortHandler}) => {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th
          onClick={() => sortHandler('name')}
          >Name</th>
          <th
          onClick={() => sortHandler('surname')}
          >Surame</th>
          <th
          onClick={() => sortHandler('birthday')}
          >Birthday</th>
          <th
          onClick={() => sortHandler('startedu')}
          >Start Date</th>
          <th
          onClick={() => sortHandler('faculty')}
          >Faculty</th>
        </tr>
      </thead>
      <tbody>
        {students.map((row, index) => (
          <tr>
          <th scope="row">{index + 1}</th>
          <td>{row.name}</td>
          <td>{row.surname}</td>
          <td>{row.birthday}</td>
          <td>{row.startEdu}</td>
          <td>{row.faculty}</td>
        </tr>
        ))}
      </tbody>
    </table>

  )
}

export default Table