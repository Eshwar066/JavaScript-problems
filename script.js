
//////////////closure//////////////
// function x(){
//   var a=10;
//   function y(){
//     console.log(a);
//   }
//    return y();
// }
// var z=x();
// console.log(z);

// function x(){
//   for(var i=1;i<=5;i++){
//     function close(i){
//       setTimeout(function(){
//       console.log('i:',i)
//       },i*1000)
//     }
//      close(i);
//   }
//   console.log("Eshwar")
// }
// x();

// setTimeout(function (){
//   console.log('set');
// },5000)


// function x(y){
//   console.log('a');
//   // return y;
//   y();
// }
// x(function y(){
//   console.log('b');
// })



// function area(x){
//   return x;
// }
// function binary(x){
//   return x.toString(2);
// }

// const result=arr.map(binary);
// // const result=arr.map(area);
// // const result1=arr.fetch(5);
// console.log(result);

// const result=arr.filter((x)=> x % 2);
// console.log(result);

// const arr=[1,2,3,4,5];
// const result=arr.reduce(function(max,x){
//   // if(x>max) return max=x;
//   return max+=x;
// },0);
// console.log(result);
////////////////////////////////////////////

//callBacks
// function greet(name, callback){
//   console.log(name);
//   callback();
// }
// function callMe(){
//   console.log('hello');
// }
// greet('peter',callMe);


//promises

// let result= new Promise(function(res,rej){
//   const count=true;
//   if(count){
//     res('there is a value');
//   }else{
//     rej('no value')
//   }
// });
// console.log(result);
// result.then((count)=>{
//   console.log(count);
// }).catch((error)=>{
//   console.log(error);
// })


//Async n await
// let Result=new Promise(function(res,rej){
//   setTimeout(function(){
//     res('hello');
//   },5000)
// });

// async function AsyncFun(){
//   let result= await Result ;
//   console.log(result);
//   console.log('hello Eshwar');
// } 
// AsyncFun();

////prototype
// function Person(){
//   this.name='Eshwar';
//   this.age=28
// }

// const person1=new Person();
// const person2=new Person();

// Person.prototype.gender='male';

// console.log(Person.prototype);
// console.log(person1.gender)




// const arr=[2,5,7,4,3];
// function double(x){
//   return x*2;
// }
// function Arr(x){
//   return x%2==0;
// }
// function count(add,x){
//   return add+=x;
// }0

// console.log(arr.map(double));
// console.log(arr.filter(Arr));
// console.log(arr.reduce(count));

//ispalindrome
// function isPalindrome(str) {
//   const length = str.length;
//   let revStr = '';

//   for (let i = length - 1; i >= 0; i--) {
//     revStr += str.charAt(i);
//   }

//   if (str === revStr) {
//     console.log('is palindrome');
//   } else {
//     console.log('not a palindrome');
//   }
// }

// isPalindrome('madam');

//MinMax
// function minMax(arr){
//  const sortedmin= arr.sort((a,b)=> a-b)

//   console.log(sortedmin[0])
// }

// minMax([9,2,5,6,8,6,4,3,5]);


// function minMax(arr){
//   let min=arr[0]
//   let max=arr[0]

//   for(let val in arr){
//     if(arr[val]>max) max=arr[val]
//     if(arr[val]<min) min=arr[val]
    
//   }
//   console.log(min,max)
//   console.log([...new Set(arr)])
// }

//////////////////
// let str = "Hello, world!";
// let uniqueStr = [...new Set(str)].join('');
// console.log(uniqueStr);
///////////////////////



//////////////////////////////////////



////////////////////
// var originalArray = [1, 2, [3, 4]];
// var deepCopy = JSON.parse(JSON.stringify(originalArray));

// deepCopy[2][0] = 99;

// console.log(originalArray);
// console.log(deepCopy);






//promise with async and await
// console.log('Eshwar')
// Promise.resolve('promise!')
//    .then(res=>console.log(res))
// console.log('Teja')

// const one=()=>Promise.resolve('hello')
// async function myfun(){
//   console.log('Eshwar')
//   const res=await one()
//   console.log(res)
// }

// console.log('before function')
// myfun()
// console.log('After function')

///////////////
//Async n await
// let Result=new Promise((res,rej)=>{
//   setTimeout(function(){
//     res('hello');
//   },5000)
// });

// async function AsyncFun(){
//   let result= await Result ;

//   console.log(result);
//   console.log('hello Eshwar');
// } 
// AsyncFun();


//map
// const arr=[1,2,3,4,5]

// const result= arr.map((x=>x*2))
// console.log(result)

// //filter
// const filter=arr.filter(x=>x%2)
// console.log(filter)

// //reduce
// const reduce=arr.reduce(res)
// function res(max,x){
//   return max+=x
// }0
// console.log(reduce)

// const Result=arr.reduce((result,curr)=>{
//   return result+=curr
// },0)
// console.log(Result)


//promise with await
// let Result=new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res('hello')
//   },1000)
// })

// async function myfun(){
//   console.log('Eshwar')
//   let result=await(Result)
//   console.log(result)
// }
// myfun()


//curring
// function multiply(a){
//   return function (b){
//     return a*b;
//   }
// }

// const multiplybyTwo=multiply(2);
// console.log(multiplybyTwo(3));


// //call
// function greet(message){
//   console.log(`${message},${this.name}`)
// }
// const Person={
//   name:'ravi'
// }

// greet.call(Person,'Eshwar');
// greet.apply(Person,['Eshwar']);

// const greetPerson=greet.bind(Person);
// greetPerson('asdasd')

/////////////////////////////////////////////////////////////////////////////
//flaten an array------------------------1
// const nestedArray = [1, [2,45], [3, 4], 5, 6];
// function flatArray(arr){
//   return arr.reduce((result,current)=>{
//     if(Array.isArray(current)){
//      return  result.concat(flatArray(current))
//     }
//     return result.concat(current)
//   },[])
// }
// const flattedArray=flatArray(nestedArray)
// console.log(flattedArray);

// //Remove Duplicates in array
// const array = [1, 2, 3, 2, 4, 1, 5, 4];
// const unique = [...new Set(array)]
// console.log(unique);


// //letter count in string------------------1
// const str = 'hello world';
// const letterCount=str.split('').reduce((count,letter)=>{
//     if(letter in count){
//       count[letter]++;
//     }else{
//       count[letter]=1;
//     }
//     return count;
//   },{})
// console.log(letterCount)

//letter count in string------------------2
// const str = 'hello world';
// const letterCount=Object.entries(str.split('').reduce((count,letter)=>{
//   count[letter]?count[letter]++:(count[letter]=1);
//   return count;
//   },{})).filter(([letter,count])=>count>1)
// console.log(letterCount)



// repeated elements in an array----------------1
// function repeat(array){
//   var repeatednum=[]
//   var count={}
//   for(let i=0;i<array.length; i++){
//     var element=array[i]
//     count[element]=count[element]?count[element]+1:1  
//   }
//   for (var key in count) {
//         if ( count[key] > 1) {
//             repeatednum.push(Number(key));
//         }
//     }
//     return repeatednum;
// }
// var array = [1, 2, 3, 4, 2, 5, 3, 7];
// var repeating=repeat(array);
// console.log(repeating);

//count number of times a number is repeated and give repeated count only----------------2
// var array = [1, 2, 3, 4, 2, 5, 3, 7];
// const result=Object.entries(array.reduce((res,num)=>{
//    res[num]?res[num]++:(res[num]=1);
//   return res;
// },{})).filter(([key,value])=>value>1)
// console.log(result)

//repeated elements in an array---------------3
// var array = [1, 2, 3, 4, 2, 5, 3, 7];
// const result=Object.entries(array.reduce((res,num)=>{
//    if(res[num]){
//      res[num]++
//    }else{
//      res[num]=1
//    }
//   return res;
// },{})).filter(([key,value])=>value>1)
// console.log(result);

//reverse words in an string--------------------------1
// const str='Hello Eshwar, im ravi kiran';
// const reversedStr=str.split(' ').reverse().join(' ')
// console.log(reversedStr)

//swap zeros ,ones and twos in javaScript---------------------1
// const arr = [1, 2, 0, 1, 1, 2, 0, 0, 1, 2, 0, 2, 1, 0];
// let low = 0;
// let mid = 0;
// let high = arr.length - 1;
// while (mid <= high) {
//   if (arr[mid] === 0) {
//     // Swap arr[mid] and arr[low]
//     [arr[mid], arr[low]] = [arr[low], arr[mid]];
//     low++;
//     mid++;
//   } else if (arr[mid] === 1) {
//     mid++;
//   } else if (arr[mid] === 2) {
//     // Swap arr[mid] and arr[high]
//     [arr[mid], arr[high]] = [arr[high], arr[mid]];
//     high--;
//   }
// }
// console.log(arr);


// swap zeros ,ones and twos usind reduce method and it is applicable to zero's and one's also-------------------2
// const arr = [1, 2, 0, 1, 1, 2, 0, 0, 1, 2, 0, 2, 1, 0];
// const swappedArray = arr.reduce((acc, num) => {
//   if (num === 0) {
//     acc.unshift(num);
//   } else if (num === 1) {
//     acc.push(num);
//   }
//   return acc;
// }, []);
// console.log(swappedArray)

// const twosCount = arr.length - swappedArray.length;
// const finalArray = swappedArray.concat(Array(twosCount).fill(2));
// console.log(finalArray);

// swap zeros ,ones and twos usind reduce method and it is applicable to zero's and one's also-------------------3
// const arr = [1, 2, 0, 1, 1, 2, 0, 0, 1, 2, 0, 2, 1, 0];
// const zeros = arr.filter((num) => num === 0);
// const ones = arr.filter((num) => num === 1);
// const twos = arr.filter((num) => num === 2);
// const swappedArr = zeros.concat(ones, twos);
// console.log(swappedArr);

//max number in an array--------------------------1
// const numbers = [5, 8, 2, 1, 10];
// const max = numbers.reduce((accumulator, currentValue) => {
// if(currentValue>accumulator) accumulator=currentValue
// return accumulator
// },0)
// console.log(max);

//number count in ana array---------------------------------1
// const array = [1, 2, 3, 2, 1, 3, 2, 4, 5, 4];
// const count = array.reduce((accumulator, currentValue) => {
//   accumulator[currentValue]?accumulator[currentValue]++:(accumulator[currentValue]=1)
//   return accumulator;
// }, {});
// console.log(count);



//Reverse an Array---------------------------------------------------1
// const array = [1, 2, 3, 4, 5];
// const reversed = array.reduce((accumulator, currentValue) => [currentValue, ...accumulator], []);
// console.log(reversed);

//Remove duplicate elements in an array------------------------------1 && 2
// const array = [1, 2, 3, 2, 4, 1, 5, 4];
// const unique = array.reduce((accumulator, currentValue) => { 
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

// const unique=[...new Set(array)]
// console.log(unique);


//converting an array to object-----------------------------------1
// const array = ['apple', 'banana', 'kiwi', 'orange'];
// const transformed = array.reduce((accumulator, currentValue,index) => {
//   accumulator[currentValue]=index
//   return accumulator;
// }, {});
// console.log(transformed);

//sorting in ascending order-------------------------------------1
// const numbers = [5, 2, 8, 1, 10];
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = 0; j < numbers.length - 1 - i; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       // Swap numbers[j] and numbers[j + 1]
//       let temp = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = temp;
//     }
//   }
// }
// console.log(numbers);

//align  array by category ------------------------------------ 1 
// const array = [
//     { id: 1, category: 'A' },
//     { id: 2, category: 'B' },
//     { id: 3, category: 'A' },
//     { id: 4, category: 'B' },
//     { id: 5, category: 'C' }
//   ];
// const result=array.reduce((acc,currValue)=>{
//     const category=currValue.category
//     if (!acc[category]) {
//         acc[category] = [];
//       }
//       acc[category].push(currValue)
//    return acc;
// },{}) 
// console.log(result);

// sorting an object considering an age //using map method
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
  ];
  
  const sorted = people.map((currentValue) => currentValue)
    .sort((a, b) => a.age - b.age);
  
  console.log(sorted);
  





