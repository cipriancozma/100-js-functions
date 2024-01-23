function canDriveCar(user, car) {
  const { age } = user;
  const { engineSize } = car;
  if (age < 18 && engineSize > 1000) {
    return false;
  }
  return true;
}

const user = {
  age: 21,
  name: "John Doe",
};

const car = {
  engineSize: 1200,
  name: "Mazda 3",
};
console.log(canDriveCar(user, car));
