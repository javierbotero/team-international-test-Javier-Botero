import sum from './sum';

test('Pass just the callback function', () => {
  expect(sum((res) => console.log('-> ', res))).toBe(0);
});

test('Sums (1), (2), (3), (4)', () => {
  expect(sum(1)(2)(3)(4)((res) => console.log('-> ', res))).toBe(10);
});
