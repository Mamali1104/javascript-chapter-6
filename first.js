//this keyword

const student = {
    name:"mama",
    age:20,
    marks:9.18,
    os:95,
    aiml:97,
    dbms:86,
    getavg() {
        let avg = ( this.os + this.aiml + this.dbms)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
//error
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a);
// console.log("hello");
// console.log("hello");



//try & catch
console.log("hello");
console.log("hello");
console.log("hello");
// a=6;
try {
    console.log(a);
}
catch(err) {
    console.log("caught an error ...a is not defined");
    console.log(err);
}
console.log("hello");
console.log("hello");
console.log("hello");


//arrow function
const sum =(a,b) => {
    console.log(a+b);
}

const cube = (n) => {
    return n*n*n;
}


//implicit return

const mul =(a,b) => (a*b);

//settimeout

console.log("hello there");

setTimeout ( () => {
    console.log("bubu love dudu");
},4000);
console.log("welcome to");

//set interval


let id = setInterval(() => {
    console.log("bubu weds dudu");
}, 2000);
console.log(id);
clearInterval(id);


let id2= setInterval(() => {
    console.log("buburani weds duduphudu");
}, 2000);
console.log(id2);
clearInterval(id2);

//this with arrow function

const studentt  = {
    name:"bubu",
    age:20,
    marks:9.18,
     //opo:this         //global scope

    getName : function () {
        console.log(this);
        return this.name;
    },

    getMarks : ()  => {
        console.log(this);      //parent's scope -> window
        return this.marks;
    },
    

    getinfo1: function() {
        setTimeout(() => {
            console.log(this);      //student
        }, 2000);
    },

    getinfo2: function() {
        setTimeout(function() {
            console.log(this);      //window
        }, 2000);
    }
};



//practice question

const square = (n) => {
    console.log(n*n*n*n);
}

let id3 = setInterval(() => {
    console.log("hello world");
},2000);
setTimeout(() =>  {
    clearInterval(id3);
    console.log("clear interval ran");
},10000);