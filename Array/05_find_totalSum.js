const likes = [10, 25, 5, 40];
const findTotalLikes = (arr)=>{
    let totalLikes = 0;
        for (let i = 0 ; i < arr.length ; i++ ){
        totalLikes+=arr[i];
    }
    return totalLikes
    
}
console.log("----------------------------------------------------")
console.log("Find total sum : ")
console.log(findTotalLikes(likes));