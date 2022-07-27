const sumPairs = require('./kata')

test("test 1", () => {
    expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
});
test("test 2", () => {
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toEqual([0, -6]);
});

test("test 3", () => {
    expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toEqual([1, 1]);
});

test("test 4", () => {
    expect(sumPairs([20, -13, 40], -7)).toBeUndefined();
});
