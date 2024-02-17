const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
  const newObj = {};
  for (let value of Object.entries(people)) {
    if (!newObj.hasOwnProperty(value[1])) {
      newObj[value[1]] = [value[0]];
    } else {
      newObj[value[1]].push(value[0]);
    }
  }
  return newObj;
}

console.log(flipObject(people));
