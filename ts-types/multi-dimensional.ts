// Multi Dimensional

// A multi-dimensional array is an array that contains other arrays as its elements. Multi-dimensional arrays can be defined using the same notation as one-dimensional arrays, but with NESTED SQUARE brackets.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const singleArray: number[] = [1, 2, 3, 4, 5, 6];
const doubleArray: number[][] = [[1, 2, 3]];
const tripleArray: number[][][] = [[[1, 2, 3]]];

console.log(matrix, singleArray, doubleArray, tripleArray);
