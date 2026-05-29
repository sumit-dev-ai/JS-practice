const names = ["Sumit", "Amit", "Sumit", "Rahul", "Amit", "Sumit"];
const obj={}
for (const item of names) {
    obj[item] = (obj[item] || 0) + 1;
}
console.log(obj);

console.log("-----------------------------------------------------------------------------------------------------")

const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Mouse", category: "electronics" },
  { id: 3, name: "Shirt", category: "fashion" },
  { id: 4, name: "Keyboard", category: "electronics" },
  { id: 5, name: "Jeans", category: "fashion" }
];

const freq={};

for (const product of products) {
    freq[product.category] = (freq[product.category] || 0) + 1;    
}

console.log(freq);
