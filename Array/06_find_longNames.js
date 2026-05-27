
const names = [ "Sumit", "Amit", "Rahul", "Sita" ];


const findLongNames = ( names )=> {
    let longNames = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 4) {
            longNames.push(names[i])
        }
        
    }
    return longNames
}
console.log(findLongNames(names)); 