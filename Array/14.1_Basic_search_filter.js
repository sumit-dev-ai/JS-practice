const products = [
  { id: 1, name: "Laptop", category: "electronics" },
  { id: 2, name: "Mouse", category: "electronics" },
  { id: 3, name: "Shirt", category: "fashion" },
  { id: 4, name: "Keyboard", category: "electronics" },
  { id: 5, name: "Jeans", category: "fashion" }
];
//Search
const searchTerm = "lap";
// find products containing lap

const searchProducts = (products , searchTerm)=> {

    const normalizedTerm= searchTerm.toLowerCase();

    const foundItems=products.filter((product)=>{
        const normalizedProductName=product.name.toLowerCase()
        if (normalizedProductName.includes(normalizedTerm)) {
            return true;
        }
       
    })
    return foundItems;
}
console.log(searchProducts(products,searchTerm))
