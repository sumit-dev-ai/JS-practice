// for strinf we use localCompare() method
const users = [
  { name: "Sumit" },
  { name: "Amit" },
  { name: "Rahul" }
];

const sortedUsers = [...users].sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log(sortedUsers);