import { twoSum } from './two-sum';

describe('Two sum', () => {
  // [2, 7, 11, 15], 9, [0, 1]
  // [3, 2, 4], 6, [1, 2]
  // [3, 3], 6, [0, 1]
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]]
  ])('should return the indexes...', (arr, target, expected) => {
    expect(twoSum(arr, target)).toStrictEqual(expected);
  });
});
