type Libli = {
  <T> (value1: T, value2: T, ...rest: any): boolean
};

const is: Libli = (...args): boolean => {
  const [one, second] = args;
  return one === second;
};

console.log(is('string', 'otherstring'));
console.log(is(true, false));
console.log('42', is(42, 42));
// console.log('foo', is(42, 'foo'));
console.log('rest', is([1], [1, 2], [1, 2, 3]));

export default is;
