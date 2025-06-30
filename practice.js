const original = {
  name: "Sumit",
  address: {
    city: "Delhi"
  }
};

const shallow = { ...original };

shallow.name = "Aman";             // ✅ Only affects shallow
shallow.address.city = "Mumbai";   // ❗ Also changes `original.address.city`

console.log(original.address.city); // 👉 "Mumbai" ❌
console.log(original.name); // 👉 "Mumbai" ❌

