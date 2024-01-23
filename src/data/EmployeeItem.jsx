import React from 'react'
import { removeEmployee } from '../services/localstorage';
import { useNavigate } from 'react-router-dom';
import { getListEmployees } from '../services/localstorage';

  const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, name, email, address, phone } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
      removeEmployee(id);
      setEmployees(getListEmployees());
    };

    return (
      <tr className="table-primasry">
        <th>{name}</th>
        <td>{email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>
          <div className="d-flex gap-3">
            <span
              type="button"
              className="badge bg-success"
              onClick={() => navigate(`/edit-employee/${id}`)}
            >
              Edit
            </span>
            <span
              type="button"
              className="badge bg-danger"
              onClick={() => deleteEmployee()}
            >
              Delete
            </span>
          </div>
        </td>
      </tr>
    );
  };
export default EmployeeItem