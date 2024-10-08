// array built-in methods 


//  Array.push()
let arr1 = [1, 2, 3];
arr1.push(4);
console.log('push:', arr1); 

// Array.pop()
let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log('pop:', arr2);

// Array.shift()
let arr3 = [1, 2, 3, 4];
arr3.shift();
console.log('shift:', arr3);

// Array.unshift()
let arr4 = [1, 2, 3];
arr4.unshift(0);
console.log('unshift:', arr4);

// Array.concat()
let arr5 = [1, 2];
let arr6 = [3, 4];
let arr7 = arr5.concat(arr6);
console.log('concat:', arr7);

// Array.join()
let arr8 = ['Hello','World'];
let str1 = arr8.join('');
console.log('join:', str1);

// Array.reverse()
let arr9 = [1, 2, 3];
arr9.reverse();
console.log('reverse:', arr9);

// Array.slice()
let arr10 =[1, 2, 3, 4];
let arr11 = arr10.slice(1,3);
console.log('slice:', arr11);

// Array.splice()
let arr12 = [1, 2, 3, 4];
arr12.splice(1, 2, 'a', 'b');
console.log('splice:', arr12);

// Array.include()
let arr13 = [1, 2, 3];
let hasTwo = arr13.includes(2);
console.log('includes:', hasTwo);

// Array.indexOf()
let arr14 = [1, 2, 3];
let index = arr14.indexOf(2);
console.log('indexOf:', index);

// Array.find()
let arr15 = [1, 2, 3, 4];
let found = arr15.find(element => element > 2);
console.log('find:', found);

// Array.findindex()
let arr16 = [1, 2, 3, 4];
let foundIndex = arr16.findIndex(element => element > 2);
console.log('findIndex:', foundIndex);

// Array.filter()
let arr17 = [1, 2, 3, 4];
let filtered = arr17.filter(element => element > 2);
console.log('filter:', filtered);

// Array.map()
let arr18 = [1, 2, 3];
let mapped = arr18.map(element => element * 2);
console.log('map:', mapped);

// Array.reduce()
let arr19 = [1, 2, 3, 4];
let sum = arr19.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('reduce:', sum);

// Array.every()
let arr20 = [1, 2, 3, 4];
let allAboveZero = arr20.every(element => element > 0);
console.log('every:', allAboveZero);

// Array.some()
let arr21 = [1, 2, 3, 4];
let someAboveThree = arr21.some(element => element > 3);
console.log('some:', someAboveThree);

// Array.sort()
let arr22 = [3, 1, 4, 2];
arr22.sort();
console.log('sort:', arr22);

// Array.flat()
let arr23 = [1,[2, 3], [4, [5, 6]]];
let flattened = arr23.flat(2);
console.log('flat:', flattened);

// Array.flatMap()
let arr24 = [1, 2, 3];
let flatMapped = arr24.flatMap(x => [x, x * 2]);
console.log('flatMap:', flatMapped);

// Array.fill()
let arr25 = [1, 2, 3, 4];
arr25.fill(0, 1, 3);
console.log('fill:', arr25);

// Array.Within()
let arr26 = [1, 2, 3, 4, 5];
arr26.copyWithin (0, 3, 4);
console.log('copyWithin:', arr26);

// Array.entries()
let arr27 = ['a', 'b', 'c'];
let iterator1 = arr27.entries();
for (let entry of iterator1) {
    console.log('entries:', entry)};

// Array.keys()
let arr28 = ['a', 'b', 'c'];
let iterator2 = arr28.keys();
for (let key of iterator2) {
    console.log('keys:', key);}

// Array.values()
let arr29 = ['a', 'b', 'c'];
let iterator3 = arr29.values();
for (let value of iterator3) {
    console.log('values:', value);}

// Array.forEach()
let arr30 = [1, 2, 3];
arr30.forEach(element => console.log('forEach:', element));
