//group dataa by auhtor name 
const posts = [
  { id: 1, author: "Sumit", content: "Hello" },
  { id: 2, author: "Amit", content: "JS" },
  { id: 3, author: "Sumit", content: "React" },
  { id: 4, author: "Rahul", content: "Node" },
  { id: 5, author: "Amit", content: "MongoDB" }
];

const grouped= {};

for (const post of posts) {
    
    const key = post.author;
    if (!grouped[key]) {
        grouped[key]= [];
    }

    grouped[key].push(post)
}

console.log(grouped);


// group by category

const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Shirt", category: "fashion" },
  { id: 3, name: "Mouse", category: "electronics" },
  { id: 4, name: "Jeans", category: "fashion" },
  { id: 5, name: "Book", category: "education" }
];

const groupedd={};

for (const product of products) {
    const key = product.category;
    if (!groupedd[key]) {
        groupedd[key]=[];
    }

    groupedd[key].push(product);
}

console.log(groupedd);


