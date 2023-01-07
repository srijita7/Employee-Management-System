import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee=(e,id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=>{
        if(employees){
            setEmployees((prevElement)=>{
                return prevElement.filter((employee)=> employee.id !== id);
            })
        }
    });
  }

  return (
    <div className="container mx-auto my-8 px-10 py-10">
      <div className="flex h-12 items-center justify-center">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b my-8">
        <table className="min-w-full">
          <thead className="bg-cyan-300">
            <tr>
              <th className="text-center font-medium text-gray-600 uppercase tracking-wider px-3 py-3">
                First Name
              </th>
              <th className="text-center font-medium text-gray-600 uppercase tracking-wider px-3 py-3">
                Last Name
              </th>
              <th className="text-center font-medium text-gray-600 uppercase tracking-wider px-3 py-3">
                Email Id
              </th>
              <th className="text-center font-medium text-gray-600 uppercase tracking-wider px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          {!loading && (
          <tbody className="bg-teal-100">
            {employees.map((employee) => (
                <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}></Employee>
            ))}
          </tbody>)}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
