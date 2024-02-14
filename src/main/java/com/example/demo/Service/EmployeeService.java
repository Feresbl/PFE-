package com.example.demo.Service;

import com.example.demo.Repository.EmployeeRepository;
import com.example.demo.Variables.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class EmployeeService {
    @Autowired
  private EmployeeRepository employeeRepository;
  public List <Employee> getAllemployees(){
      return employeeRepository.findAll();
  }
  public Employee getEmployeeById(Long id){
      return employeeRepository.findById(id).orElse(null);
  }
  public Employee createEmployee(Employee employee){
     return employeeRepository.save(employee);

  }
  public void deleteEmployee(long id ){
      employeeRepository.deleteById(id);
  }
  public Employee updateEmployee(Employee updatedEmployee, Long id){
      Employee existingEmployee=employeeRepository.findById(id).orElseThrow(()-> new NoSuchElementException("employeeNotFound"));
      existingEmployee.setName(updatedEmployee.getName());
      existingEmployee.setLastname(updatedEmployee.getLastname());
      return employeeRepository.save(existingEmployee);
  }


}
