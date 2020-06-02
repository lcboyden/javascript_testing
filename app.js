export const originalArray = (arr) => {
  return arr;
};
// doubleArray(numberArray); // => [2,4,6,8];  hint use map
export const doubleArray = (arr) => {
  let doubledArr = arr.map((number) => {
    return number * 2;
  });
  return doubledArr;
};

export const evensOnlyArray = (arr) => {
  let evensArray = arr.filter((number => {
   if (number % 2 === 0 )
   return number
  }))
  return evensArray;
};

export const arraySum = (arr) => {
  return arr.reduce((result, current) => result + current, 0)
};

export const allNumbersGreaterThanZero = (arr) => {
  
};


// ARRAY ITERATOR METHODS

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray); // => true; use every

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray); // => true; use some

// // return array double and even
// evensOnlyAndDoubleArray(numberArray); // => [4,8]; // use map and filter

// // find an item method return 'not found' if not found
// findItem(numberArray, 1); //=> 1

// // sort array desc order
// sortArray(numberArray); //=> [4,3,2,1] *desc*
