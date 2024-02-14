function pickFields(data, fields) {
  let newObj = {};
  for (const field of fields) {
    if (Object.keys(data).includes(field)) {
      newObj[field] = data[field];
    }
  }
  return newObj;
}

const data = {
  color: "blue",
  name: "Earth",
  solarSistem: "Milky Way",
};

const fields = ["name", "color"];
console.log(pickFields(data, fields));
