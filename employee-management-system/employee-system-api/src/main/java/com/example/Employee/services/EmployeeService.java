package com.example.Employee.services;

import com.example.Employee.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);

    Employee getEmployeeById(Long id);
}
