const students = [
  { name: "Sumit", marks: 85 },
  { name: "Amit", marks: 92 },
  { name: "Rahul", marks: 78 }
];

const sorted = [...students].sort((a,b)=>{
    return a.marks - b.marks;
})

console.log(sorted);

