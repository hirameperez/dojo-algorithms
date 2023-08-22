export function binarySearch(
  arr: number[],
  target: number,
  startIndex = 0,
  endIndex = arr.length - 1
): number {
  if (!arr.length || startIndex > endIndex) return -1;

  const middle = Math.floor((startIndex + endIndex) / 2);

  if (target === arr[middle]) return middle;

  if (target < arr[middle]) {
    return binarySearch(arr, target, startIndex, middle - 1);
  } else {
    return binarySearch(arr, target, middle + 1, endIndex);
  }
}

const arr = [-1,0,3,5,9,12];
const target = 3;

console.log(binarySearch(arr, target, 0, arr.length - 1)); // 4

