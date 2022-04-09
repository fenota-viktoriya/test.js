function flatARR(arr){
 const newArr = arr.flat(Infinity);
 return newArr;
}
 const arr= [1, [2], [[[3]]]];


//console.log(flatARR(arr));


let string = 'Vikav';

function findletters(str){
    const a = str.toUpperCase();
  return  new Set(a).size === a.length;
  
}
console.log(findletters(string))

