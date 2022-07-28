const positiveSum = require('./kata')

test("test 1", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
});
test("test 2", () => {
    expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
});
