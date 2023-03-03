const fn = (a: number, b: number) => a + b;

describe('test example', () => {
  const cases: [string, number, number, number][] = [
    ['Case 1', 3, 4, 7],
    ['Case 2', 10, -10, 0],
  ];

  it.each(cases)('%s', (_title, a, b, expected) => {
    expect(fn(a, b)).toEqual(expected);
  });
});
