const employee = {};
employee.name = "levin";
employee.streetAddress = "moiAvenue";

employee;

function updateEmployeeWithKeyAndValue(){
    const employees = {...employee};
    employees.name = "Sam"
    employees.streetAddress = "11 Broadway"
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee
}

function deleteFromEmployeeByKey(){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}
