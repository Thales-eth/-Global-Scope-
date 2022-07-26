const sumPairs = require('./kata')

test("works", () => {
    expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
});
test("works perfectly", () => {
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
});

test("works just fine", () => {
    expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1]);
});

test("works Great!", () => {
    expect(sumPairs([20, -13, 40], -7)).toBeUndefined();
});
