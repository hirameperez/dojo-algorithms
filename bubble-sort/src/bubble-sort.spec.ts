import { bubbleSort } from './bubble-sort';

describe('Bubble sort', () => {
  it.each([
    [[5, 1, 4, 2, 8], [1, 2, 4, 5, 8]],
    [[5, 1, 4, 2, 3], [1, 2, 3, 4, 5]],
    [[8, 4, 2], [2, 4, 8]],
    [[9, 7, 1, 2], [1, 2, 7, 9]]
  ])('should return a sorted arr', (arr, expected) => {
    expect(bubbleSort(arr)).toStrictEqual(expected);
  });
});
