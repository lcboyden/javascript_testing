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
  return arr.every((number => number > 0));
};

// this one needs work
export const someNumbersAreOdd = (arr) => {
//  return arr.some((number => number % 1 === 0));
  
  // let someOdd = arr.some((number => {
  //   if (number % 1 === 0 )
  //   return
  // }))
  // return someOdd;
};

export const evensOnlyAndDoubleArray = (arr) => {
  .filter(evensOnlyArray)
  .map(doubleArray)
};


//okay, this is as far as i got :( 
  
// // return array double and even
// evensOnlyAndDoubleArray(numberArray); // => [4,8]; // use map and filter

// // find an item method return 'not found' if not found
// findItem(numberArray, 1); //=> 1

// // sort array desc order
// sortArray(numberArray); //=> [4,3,2,1] *desc*
