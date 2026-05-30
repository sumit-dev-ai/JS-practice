const names = ["Sumit", "Amit", "Sumit", "Rahul", "Amit"];

const uniqueNames = [...new Set(names)]

console.log(uniqueNames);
// it works well for primitive values but not for objects

const users = [
  { id: 1, name: "Sumit" },
  { id: 2, name: "Amit" },
  { id: 1, name: "Sumit" },
  { id: 3, name: "Rahul" },
  { id: 2, name: "Amit" }
];

const uniqueUsersById = (users) => {
    const seen = new Set()
    const uniqueUsers = []
    for(let user of users){
        if (!seen.has(user.id)) {
            seen.add(user.id)
            uniqueUsers.push(user)
        }
    }
    return  uniqueUsers ;
};

console.log(uniqueUsersById(users));