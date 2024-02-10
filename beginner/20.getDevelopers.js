function getDevelopers(employees) {
  const filtered_employees = employees.filter(
    (employee) => employee.job === "developer"
  );
  return filtered_employees;
}

const employees = [
  {
    age: 28,
    job: "developer",
    name: "Alice",
  },
  {
    age: 35,
    job: "designer",
    name: "Bob",
  },
  {
    age: 42,
    job: "manager",
    name: "Charlie",
  },
  {
    age: 31,
    job: "developer",
    name: "David",
  },
];
console.log(getDevelopers(employees));
