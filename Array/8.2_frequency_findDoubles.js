const nums = [1, 2, 3, 2, 4, 1, 5];

const freq={};

for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;    
}
console.log(freq);

const multipleVals=[]
for (const element of Object.keys(freq)) {
 if (freq[element] > 1) {
    multipleVals.push(element)
 }   
}
console.log(multipleVals);
