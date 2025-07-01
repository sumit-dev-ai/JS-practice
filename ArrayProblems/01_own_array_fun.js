//own map()
console.log("-------------------MyMAp()------------------------");
Array.prototype.myMap=function(callback){
    const res=[];
    for(let i=0; i<this.length;i++){
        res.push(callback(this[i],i,this));
        /*
        for i =0   this[0]= 1            /this=[1,2,3,4]
        callback(1,0,[1,2,3,4])
        (num)=>num*2   ---->     (1)=> 1*2 
        res.push(2)
        */
    }
    return res;
};
const numbers = [1, 2, 3, 4];

const doubled = numbers.myMap((num) => num * 2);
console.log(doubled); //  [2, 4, 6, 8]


//filter()
console.log("-------------------MyFilter()------------------------");
Array.prototype.MyFilter=function(callback){
    const res=[];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)) {
            res.push(this[i]);
        }
        
    }
    return res;
}
const Even = numbers.MyFilter((num) => num %2=== 0);
console.log(`Filter function to find even : ${Even}`);



console.log("-------------------myReduce()()------------------------");
//reduce()
Array.prototype.MyReduce=function(callback,initialVal){
    let accumlator=initialVal;
    let startIndex=0;
    if(accumlator===undefined){     //checking if inital val is provided
        accumlator=this[0];
        startIndex=1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumlator=callback(accumlator,this[i],this);
        
    }
    return accumlator;
}




const sum = numbers.MyReduce((acc, curr) => acc + curr, 0);
console.log(`Reduce function to find even : ${sum}`);


