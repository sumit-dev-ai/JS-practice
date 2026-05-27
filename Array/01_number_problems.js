//problem find the numbers greater than a certain number

const comprarisonVal=10

const numberGreaterThanNum=(array)=>{
    let array2=[]
    for (let index = 0; index < array.length; index++) {
       
        if(array[index] > comprarisonVal){
            array2.push(array[index]);
        }
        
    }
    return array2;
}

console.log(numberGreaterThanNum([1,5,67,8,45,8]));