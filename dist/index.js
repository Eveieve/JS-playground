array = [3, 2, 4, 0, 7, 5, 23, 12, 56, 11, 27, 68, 34, 53];
// merge sorted arrays.
let C = [];

// A and B are sorted in order.
function merge(A, B) {
  let m = A.length; // length of array A
  let n = B.length;
  let k = 0;
  let j = 0;
  let i = 0;
  console.log(A);
  console.log(B);
  while (i <= m && j <= n) {
    if (A[i] < B[j]) {
      C[k++] = A[i++];
      console.log(C);
    } else {
      C[k++] = B[j++];
      console.log(C);
    }
  }
  return C; // return after copying all values.
}

function mergeSort(array) {
  l = 0;
  h = array.length;
  if (array.length <= 1) return array;
  else if (array.length > 1) {
    const mid = Math.ceil((l + h) / 2);
    const leftArray = array.slice(l, mid);
    const rightArray = array.slice(mid, h);
    console.log(leftArray);
    console.log(rightArray);
    const sortedLeft = mergeSort(leftArray);
    console.log(sortedLeft);
    const sortedRight = mergeSort(rightArray);
    console.log(sortedRight);
    const mergedArray = merge(sortedLeft, sortedRight);
    // console.log(mergedArray);
    return mergedArray;
  }
}

console.log(mergeSort(array));

// i was not storing !!!!!!!!
