import { isPalindrome, normalizeStr } from './valid-palindrome';

describe('Valid palindrome', () => {
  it('should normalize a string', () => {
    const str = 'Able was I, ere I saw Elba.';

    expect(normalizeStr(str)).toBe('ablewasiereisawelba');
  });
});
