// forEach

// forEach example 1
// function countZeroes(arr){
// 	let total = 0;
// 	arr.forEach(function(val){
// 	  if(val === 0) {
// 		  total++;
// 	  }
// 	});
// 	return total;
//   }

//   countZeroes([2,4,6]); // 0
//   countZeroes([0,1,2,0,1]); // 2

// forEach example 2
// const prices = [ 30.99, 19.99, 2.5, 99.0 ];
// let total1 = 0;
// prices.forEach(function(price) {
// 	total1 += price;
// });
// console.log(total1);

// forEach example 3
// // Our own version of forEach:
// function forEach(arr, callback) {
// 	for (let i = 0; i < arr.length; i++) {
// 		callback(arr[i], i, arr);
// 	}
// }

// doubleValues
// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

const forEachArray = [1, 1, 2, 3];
function doubleValues(arr) {
  const newArray = [];
  arr.forEach(function doubled(val) {
    newArray.push(val * 2);
  });
  return newArray;
}

console.log(doubleValues(forEachArray));

// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

onlyEvenValuesArray = [5, 1, 2, 3, 10];
function onlyEvenValues(arr) {
  const newArray = [];
  arr.forEach(function isEven(val) {
    if (val % 2 === 0) {
      newArray.push(val);
    }
  });
  return newArray;
}

console.log(onlyEvenValues(onlyEvenValuesArray));

// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

showFirstAndLastArray = ["colt", "matt", "tim", "test"];
function showFirstAndLast(arr) {
  const newArray = [];
  arr.forEach(function firstLastChar(string) {
    newArray.push(string[0] + string[string.length - 1]);
  });
  return newArray;
}

console.log(showFirstAndLast(showFirstAndLastArray));

// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
// addKeyAndValue(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//       'title',
//       'instructor'
//     )

//     /*
//       [
//         {name: 'Elie', title:'instructor'},
//         {name: 'Tim', title:'instructor'},
//         {name: 'Matt', title:'instructor'},
//         {name: 'Colt', title:'instructor'}
//       ]
//     */

const addKeyAndValueArray = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];
const addKeyAndValueKey = "title";
const addKeyAndValueaValue = "instructor";

function addKeyAndValue(arr, key, val) {
  const newArray = [];
  arr.forEach(function (object) {
    object[key] = val;
    newArray.push(object);
  });
  return newArray;
}

console.log(
  addKeyAndValue(addKeyAndValueArray, addKeyAndValueKey, addKeyAndValueaValue)
);

// vowelCount
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.This function should be case insensitive so a lowercase letter and uppercase letter should count

// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

function vowelCount(str) {
  const object = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  arr = str.split("");
  arr.forEach(function tallyVowel(c) {
    c = c.toLowerCase();
    if ("aeiou".indexOf(c) !== -1) {
      object[c] = object[c] + 1;
    }
  });
  return object;
}

console.log(vowelCount("tally ho ho ho hee hee hee"));

// map

// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

const doubleValueWithMapArray = [1, -2, -3];
function doubleValuesWithMap(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

console.log(doubleValuesWithMap(doubleValueWithMapArray));

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1, -2, -3]) // [0,-2,-6]

const valTimesIndexArray = [1, -2, -3];
function valTimesIndex(arr) {
  return arr.map(function (val, i, arr) {
    return val * i;
  });
}

console.log(valTimesIndex(valTimesIndexArray));

// extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
// extractKey(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//     'name'
//   )

// ['Elie', 'Tim', Matt', 'Colt']

const extractKeyArray = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const extractKeyKey = "name";

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

console.log(extractKey(extractKeyArray, extractKeyKey));

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

const extractFullNameArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia" },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele" },
];

function extractFullName(arr) {
  return arr.map(function (obj) {
    return `${obj["first"]} ${obj["last"]}`;
  });
}

console.log(extractFullName(extractFullNameArray));

// filter

// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
// filterByValue(
//   [
//     { first: "Elie", last: "Schoppik" },
//     { first: "Tim", last: "Garcia", isCatOwner: true },
//     { first: "Matt", last: "Lane" },
//     { first: "Colt", last: "Steele", isCatOwner: true },
//   ],
//   "isCatOwner"
// );

/*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */

const filterByValueArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const filterByValueTest = "isCatOwner";

function filterByValue(arr, test) {
  return arr.filter(function (obj) {
    return obj[test];
  });
}

console.log(filterByValue(filterByValueArray, filterByValueTest));
