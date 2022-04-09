//найти все совершенніе число до 10000ж



function specialNum(a=1, b=250){
    let res= [];
for(let i = a; i < b; i += 1)
{sum = 0;
for (let j = 1; j<= i/2; j+=1) 
console.log(i);
{
    if(i%j === 0) sum +=j;}
    if(i ===sum) res.push(i);
}return res;};




//console.log(specialNum())
const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
