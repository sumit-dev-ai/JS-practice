//calculate total cost
//count total Quantitity
//Build a Summary like {totalItamns;10,total cost: 500$}

const cart=[
    {name:"laptop",price:50000,quantity :1},
    {name:"DataCable",price:500,quantity :2},
    {name:"Mobile",price:120000,quantity :1},
    {name:"Keyboard",price:1200,quantity :1},
    {name:"Printer",price:5000,quantity :1},
];
//total cost
const totalCost=cart.reduce((acc,curr)=>acc + curr.price*curr.quantity,0);
console.log("Total Cost : ",totalCost);

//total items
const totalItems = cart.reduce((acc, item) => {
  return acc + item.quantity;
}, 0);

console.log("Total Items:", totalItems); 


//Summary
const summary = cart.reduce(
  (acc, item) => {
    acc.totalCost += item.price * item.quantity;
    acc.totalItems += item.quantity;
    return acc;
  },
  { totalCost: 0, totalItems: 0 }
);

console.log(summary);

