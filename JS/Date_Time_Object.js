console.log('Date & Time ');

let today = new Date();

// console.log(today);
// console.log(typeof today);

let date = new Date('8-4-2003 04:54:08');
date = new Date('June 13 1970');
date = new Date('11/12/2002');

// console.log(date);

let a = date.getDay();
a = date.getMinutes();
a = date.getMilliseconds();
a = date.getSeconds();
a = date.getHours();
a = date.getTime(); // return no of seconds since 1974 i guss
/*
0 ->Sunday
1-> monday  
2->Tuesday
3->Wednesday
4->THrusday
5->Friday
6->Saturday

*/
// console.log(a);
date.setDate(23);
date.setFullYear(1900);
date.setMinutes();
date.setMilliseconds();
date.setSeconds();
date.setHours();
date.setTime();
console.log(date);