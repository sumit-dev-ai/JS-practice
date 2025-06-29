const items = ['apple', 'banana', 'apple','banana', 'orange', 'banana','orange','orange','orange','banana'];

const count = items.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count); 
// { apple: 2, banana: 4, orange: 4 }
