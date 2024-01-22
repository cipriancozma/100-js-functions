function getBusinessAddress(business) {
  const {
    address: { number, street, zipCode },
  } = business;
  return `${street}, number ${number}, ${zipCode}`;
}

const business = {
  address: {
    number: 3,
    street: "Avenuepark",
    zipCode: 123500,
  },
  name: "100 Functions ltd.",
};
console.log(getBusinessAddress(business));
