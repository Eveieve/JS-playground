array = [3, 2, 4, 0, 8, 10, 10, 1, 16, 13];
const C = [];

function merge(A, B) {
  if (A && B) {
    let m = A.length; // length of array A
    let n = B.length;

    let i = 0;
    let k = 0;
    let j = 0;
    // console.log(A);
    while (i <= m && k <= n) {
      if (A[i] < B[k]) {
        C[j++] = A[z++];
      } else C[j++] = B[k++];
      // return C;
    }
    for (i <= m; i++; ) C[j++] = A[i];
    for (k <= n; k++; ) C[j++] = B[k];
    // console.log(C);
  }
  return C;
}
// h is the length
function mergeSort(l, h, array) {
  const slicedArray = array.slice(l, h);
  console.log(slicedArray);
  if (slicedArray.length === 0) return slicedArray;
  else if (slicedArray.length > 1) {
    const mid = (l + h) / 2;
    const leftArray = mergeSort(l, mid, slicedArray);
    // console.log(leftArray);
    const rightArray = mergeSort(mid, h, slicedArray);
    return merge(leftArray, rightArray);
    // return the merged array
  }
  // return slicedArray;
}

console.log(mergeSort(0, 10, array));

// i was not storing !!!!!!!!
