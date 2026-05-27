
// find names whose length is greater than 4

const names = ["Sumit", "Amit", "Rahul", "Sita"];


// write loop here
const findCount = ( names )=> {
    let count = 0;

    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 4) {
            count++;
        }
        
    }
    return count;
}


console.log(findCount(names)); // should print 2