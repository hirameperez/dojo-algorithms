export function isPalindrome(str: string): boolean {
  return false;
}

export function normalizeStr(str: string): string {
  return str
    .trim()
    .toLocaleLowerCase("en-US")
    .replace(/((&quot)|[\/\\"“”'\.,;:-])+/g, "")
    .normalize("NFKD")
    .replace(/[ ]+/g, "")
    .replace(/\p{Diacritic}/gu, "");
}
