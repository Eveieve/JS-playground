array = [3, 2, 4, 0, 7, 5, 23, 12, 56, 11, 27, 68, 34, 53];
let C = [];

function merge(A, B) {
  if (A.length === 1) return A;
  if (B.length === 1) return B;

  let m = A.length; // length of array A
  let n = B.length;
  console.log(m);
  console.log(n);
  let i = 0;
  let k = 0;
  let j = 0;

  while (i <= m && k <= n) {
    if (A[i] < B[k]) {
      C[j++] = A[i++];
    } else {
      C[j++] = B[k++];
      // return C;
    }
  }
  return C;
}
// h is the length
function mergeSort(array) {
  l = 0;
  h = array.length;
  if (array.length == 1) return array; //return the one item array(sorted)
  else if (array.length > 1) {
    const mid = (l + h) / 2;
    const leftArray = array.slice(l, mid);
    const rightArray = array.slice(mid, h);
    console.log(leftArray);
    console.log(rightArray);
    const sortedLeft = mergeSort(leftArray);
    console.log(sortedLeft);
    const sortedRight = mergeSort(rightArray);
    console.log(sortedRight);
    const sortedArray = merge(sortedLeft, sortedRight);
    // console.log(sortedArray);
    return sortedArray;
  }
}

console.log(mergeSort(array));

// i was not storing !!!!!!!!
