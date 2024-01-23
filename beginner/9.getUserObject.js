function getUserObject(firstName, lastName, age) {
  return {
    age,
    name: `${firstName} ${lastName}`,
  };
}

console.log(getUserObject("John", "Doe", 31));
