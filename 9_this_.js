console.log(this);  //{}

function show(){
    // console.log(this);  //global object because its node js 
}
show();

//-------------------------------------------

const person={
    name: 'Sakib',
    age: 30,
    show: function(){
        console.log(this);  //person object
    }
}   
person.show();

//----------------------------------------------------
// IIFE 
const person1={
    name: 'Sakib',
    age: 30,
    show: (function(){
        console.log(this);  //global object    //undefined in strict mode
    })()
}   ;
//
//----------------------------------------------------
const person2 = {
  name: "Sumit",
  greet() {
      function inner() {
        console.log(this.name); // ❌ undefined
    }
    inner();
  }
};

person2.greet();

//----------------------------
// undefined because arrow function does not have its own this value
// it uses the this value of its lexical scope.
const user = {
  name: "Sumit",
  sayHi: () => {
    console.log(this.name); // ❌ undefined (not user)
  }
};

user.sayHi();
//-----------------------------------
const per = {
  name: "Sumit",
  sayHi() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
per.sayHi(); //Sumit
//------------------------------------------------
const persn = {
  name: "Sumit",
  greet() {
    const that = this;
    function inner() {
      console.log(that.name);
    }
    inner(); 
}
};
persn.greet(); //Sumit
//----------------------------------------------
