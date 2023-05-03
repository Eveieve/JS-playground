array = [4, 2, 0];
// merge sorted arrays.
let C = [];

// A and B are sorted in order.
function merge(A, B) {
  let m = A.length; // length of array A
  let n = B.length;
  let k = 0;
  let j = 0;
  let i = 0;
  console.log("A", A);
  console.log("B", B);
  while (i <= m && j <= n) {
    if (A[i] < B[j]) {
      C[k++] = A[i++];
      console.log("ongoing C", C);
    } else {
      C[k++] = B[j++];
      console.log("ongoing2", C);
    }
  }
  console.log("C", C);
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
    console.log("leftArray", leftArray);
    console.log("rightArray", rightArray);
    const sortedLeft = mergeSort(leftArray);
    console.log("sortedLeft", sortedLeft);
    const sortedRight = mergeSort(rightArray);
    console.log("sortedRight", sortedRight);
    const mergedArray = merge(sortedLeft, sortedRight);
    console.log("mergedArray", mergedArray);
    return mergedArray;
  }
}

console.log(mergeSort(array));

// i was not storing !!!!!!!!
