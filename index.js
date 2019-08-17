/*Arrow function*/

var getName=(name)=>{console.log(name);return name}
getName('shruti');

/*let and const*/
getSalary=(sal) =>{
   let sum;
  const bonus=2;
  if(sal>100) {
   sum= sal*100*bonus; }
  else {
    sum =sal*1000*bonus;}
}
getSalary(100);

/*Destructing*/
const info={fname:'shruti',id:123456,sal:1234524}

const {fname,id}=info;

console.log({fname});

/*Spread operator*/
object1={'name':'xxx',value:111};
object2={...object1,'sal':1000}

/*Default values*/
getSalary=(baseSal=10) =>{
   let sum;
  const bonus=2;
  if(baseSal>100) {
   sum= baseSal*100*bonus; }
  else {
    sum =baseSal*1000*bonus;}
  return sum;
}
getSalary();

/*rest operator*/
getSum=(...n)=>{
let sum=0;
for(let i=0;i<n.length;i++){
  sum+=n[i];
}
  return sum;
     }
getSum(1,2,3,4);
getSum(1,2,3,4,5,6,7,8);

/*Export and import*/


/*Classes*/

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getWidth(){
    return this.width;
    }
}
class Rectangle extends Shape {
  constructor(height, width) {
    super(height,width);
  }

  
}
var rec= new Rectangle(1,2);
rec.getWidth();

/*Promise*/
var firstPromise = new Promise((resolve,reject) => {
  if(true){
    resolve('resolved1');}
    else {reject('reject');
  }});
var secondPromise = new Promise((resolve,reject) => {
 resolve('resolved2');});
firstPromise.then((message)=>{console.log(message);x=null;}).then((message)=>{ console.log(message);})

Promise.all([firstPromise,secondPromise]);
Promise.race([firstPromise,secondPromise]);

/*Generators*/
function * generatorFunction() { // Line 1
  console.log('This will be executed first.');
  yield 'Hello, ';   // Line 2
  console.log('I will be printed after the pause');  
  yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6

/*Asynch await*/
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person6 shows ${t}`));

console.log('person4 shows ticket');
