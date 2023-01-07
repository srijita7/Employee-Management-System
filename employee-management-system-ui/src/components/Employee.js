import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({employee, deleteEmployee}) => {

    const navigate=useNavigate();
    const editEmployee=(e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

  return (
      <tr key={employee.id}>
        <td className="text-center px-3 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-800">{employee.firstName}</div>
        </td>
        <td className="text-center px-3 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-800">{employee.lastName}</div>
        </td>
        <td className="text-center px-3 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-800">{employee.emailId}</div>
        </td>
        <td className="text-right px-3 py-4 whitespace-nowrap">
          <div className="flex justify-center font-medium text-sm">
            <a onClick={(e, id)=>editEmployee(e,employee.id)} className="hover:cursor-pointer">
              <button className="rounded px-4 py-1 mx-3 bg-green-600 hover:bg-green-700 text-gray-100">
                Edit
              </button>
            </a>
            <a onClick={(e,id) => deleteEmployee(e, employee.id)} className="hover:cursor-pointer">
              <button className="rounded px-4 py-1 bg-red-600 hover:bg-red-700 text-gray-100">
                Delete
              </button>
            </a>
          </div>
        </td>
      </tr>
  );
};

export default Employee;
