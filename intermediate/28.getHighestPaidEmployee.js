function getHighestPaidEmployee(employees, departmentId) {
  const filteredEmployeesByDepart = employees.filter(
    (item) => item.departmentId === departmentId
  );

  const filteredEmployeWithBiggestSalary = filteredEmployeesByDepart.reduce(
    (acc, currentValue) => {
      return Number(acc.salary) > Number(currentValue.salary)
        ? acc
        : currentValue;
    },
    {}
  );

  return filteredEmployeWithBiggestSalary.name;
}

const employees = [
  {
    departmentId: "A110",
    name: "Alice",
    salary: "7611",
  },
  {
    departmentId: "A110",
    name: "Bob",
    salary: "9288",
  },
  {
    departmentId: "A504",
    name: "David",
    salary: "6100",
  },
  {
    departmentId: "A504",
    name: "Charlie",
    salary: "4109",
  },
];
console.log(getHighestPaidEmployee(employees, "A504"));
