package com.example.demo.Controller;

import com.example.demo.Service.EmployeeService;
import com.example.demo.Variables.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3002")
@RestController
@RequestMapping ("/Employee")
public class EmployeeRestController {
    private  final EmployeeService employeeService;


    public EmployeeRestController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @GetMapping
    public List <Employee> getAllemployees(){
        return employeeService.getAllemployees();
    }
    @GetMapping ("/{id}")
    public Employee getEmployeeById(@PathVariable  Long id){
        return employeeService.getEmployeeById(id);
    }
    @PostMapping
    public Employee CreateEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }
    @DeleteMapping("/{id}")
    public void  DeleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }
    @PutMapping("/{id}")
    public Employee UpdateEmployee(@RequestBody Employee employee,@PathVariable Long id ) {
    return  employeeService.updateEmployee(employee, id);
    }

}
