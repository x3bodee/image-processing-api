import isPositive from '../../helper/isPositive';

it('expect isPositive(500) to be True', () => {
  expect(isPositive(500)).toBeTrue();
});

it('expect isPositive(-350) to be False', () => {
  expect(isPositive(-350)).toBeFalse();
});

it('expect isPositive(100) to be False', () => {
  expect(isPositive(100)).toBeFalse();
});
