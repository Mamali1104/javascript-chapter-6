
//Q.1
const arrayAvg =(array) => {
    let total =0;
    for(let numbers of array) {
        total += numbers;
       
    }
    return total / array.length;
}
let array =[2,4,16,7];
console.log(arrayAvg(array));

//Q.2
let n=8;
const isEven = (n) => n%2 == 0; 

