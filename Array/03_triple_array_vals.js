// triple Every Number

const arr = [1, 2 ,3 ,4, 5 ,6 ,7 ,8  ];

const tripleEveryNumber = ( arr )=>{
    const arr2 = []

    for (let i = 0 ; i < arr.length ; i++ ){
        arr2.push(arr[i] * 3);
    }
    return arr2
}

console.log("----------------------------------------------------")
console.log(" tripple array numbers : ")
console.log(tripleEveryNumber( arr ));