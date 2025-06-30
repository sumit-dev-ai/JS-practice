//Group students by grade Logic

const marks = [90, 45, 77, 32, 61];
const grouped=marks.reduce((acc,marks)=>{
    if (marks>=60) {
        acc.passed.push(marks);
        
    }
    else
{
    acc.failed.push(marks);
}
return acc;
},{passed:[],failed:[]});

console.log(grouped);
// Program

const students = [
  { name: "Sumit", score: 85 },
  { name: "Aman", score: 50 },
  { name: "Tina", score: 75 },
  { name: "Kiran", score: 45 }
];
const grouped1=students.reduce((acc,std)=>{
    if(std.score>=60){
        acc.passed.push(std);
    }
    else{
        acc.failed.push(std);
    }
    return acc;

},{passed:[],failed:[]});
console.log(grouped1)