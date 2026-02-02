var arr=[2,,8,10,4,5,,8,5,2,3,6];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

const obj = {name:"yuvraj"}
console.log(obj.name);
obj.name = "yash";
console.log(obj.name);

function greet(name){
    console.log("hello " + name);
    console.log(`hello ${"yuvraj"}`); //practice for this
}
greet("yuvraj");

//this function does not allow hoisting.
//function with expression.
const factorial = function(n){
    if(n==1 || n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));

function fact(n){
    if(n==1 || n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}
console.log(fact(5)); 

// fibonacci with expression.
const fibonacci = function(n) {
    let a = 0, b = 1;

    for (let i = 1; i <= n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
};
fibonacci(7);


//objects
const sales = "toyota";
function Types(name){
    return name==="Honda" ? name:"sorry";
}

const car = {mycar:"saturn",getcar:Types("Honda"),special:sales}
console.log(car.mycar);
console.log(car.getcar);
console.log(car.special);

//for in loop. -> uses mostly with objects
const student = {name:"yuvraj",age:20,hobby:"gym"}
for(const key in student){
    console.log(key,student[key]);
}

var array = [3,3,4,2,3,4];
for(const key in array){
    console.log(key,array[key])
}

//for of loop;
const fruits = ["apple","banana","litchi"];
for(const fruit of fruits){
    console.log(fruit);
}
//when i want to play with values then use for of loop .
// if work with indexes than use for in loop.

for(const char of "javascript"){
    console.log(char);
}

// let count=0;
// for(const char of "aejreio"){
//     if(char == "a" || char=="e" || char=="i" || char=="o" || char=="u"){
//         count++;
//     }
    
// }
// console.log(Count);

const color = ["red" , "yellow" , "blue"];
for(Const[index,color] of colors.enteries()){
    console.log(index,color);
}
