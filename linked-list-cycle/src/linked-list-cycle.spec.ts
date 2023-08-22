import { LinkedList } from './linked-list-cycle';

describe('Linked List Cycle', () => {
  it('should not be cycled', () => {
    const values = [3, 4, 1];
    const pos = -1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.isCycled()).toBeFalsy();
  });

  it('should be cycled', () => {
    const values = [3, 2, 0, -4];
    const pos = 1;
    const list = new LinkedList();

    list.addToHead(values, pos);

    expect(list.isCycled()).toBeTruthy();
  });
});
