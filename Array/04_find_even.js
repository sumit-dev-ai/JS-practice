arr=[1,2,3,5,8,12,16,67,76,80]
// Keep Only Even Numbers
const findEvenNumber = ( arr )=>{
    const arr2 = []

    for (let i = 0 ; i < arr.length ; i++ ){
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    return arr2
}

console.log("----------------------------------------------------")
console.log("Find even number : ")
console.log(findEvenNumber( arr ));