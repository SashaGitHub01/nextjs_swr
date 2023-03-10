/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */

function parse(str: string, num: number) {
  const args = [].slice.call(arguments, 1);
  let i = 0;

  return str.replace(/%d/g, () => {
    return args[i++];
  });
}

function plural(a: number) {
  if (a % 10 === 1 && a % 100 !== 11) {
    return 0;
  } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
    return 1;
  } else {
    return 2;
  }
}

export function pluralize(i: number, str0: string, str1: string, str2: string, str3: string) {
  if (!i) return parse(str0, i);
  switch (plural(i)) {
    case 0:
      return parse(str1, i);
    case 1:
      return parse(str2, i);
    default:
      return parse(str3, i);
  }
}
