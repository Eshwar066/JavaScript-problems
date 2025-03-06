// Custom map function
//Q.1-  Array.map((num,i,arr)=>{})

Array.prototype.myMap= function (cb){
    let temp=[];
    for (let i=0; i<this.length; i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
}

const nums=[3,5,7,9,5];

let multiplyingWithThree=nums.map(item=>item*3);
console.log(">>multiplyingWithThree",multiplyingWithThree);


// Custom Filter
//Q.2 - Polyfill for filter()

Array.prototype.myFilter= function (cb){
    let temp=[];
    for (let i=0; i<this.length; i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

let divisableBy3=nums.myFilter(item=> item%3===0)
console.log(">>divisableBy3",divisableBy3);

//Custom reduce or Polyfill for reduce
//Question 3-  Array.reduce((acc,cur,i,arr)=>{},initialValue)

Array.prototype.myReduce=function(cb,initialValue){
    var accumulator=initialValue;
    for(let i=0;i<this.length;i++){
     accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
}

const sum=nums.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0)
console.log(">>sum",sum);

//call.apply and bind in JavaScript 
//Question 4- Polyfill for call





