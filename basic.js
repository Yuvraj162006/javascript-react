//call back.
function greet(){
    console.log("Welcome");
}
function excecute(fn){
    fn();
}
excecute(greet);

const number=[1,2,3,4];
let newnumber = number.map(function(n){
    return n*2;
})
let newnum = number.map(n=>n*2); // .map((elements,index)=><li>{elements})

//filter an array.
const num=[2,4,6,8];
const newnumb=num.filter(n=>n%2==0);
console.log(newnumb);

const sum=[...num,5];
