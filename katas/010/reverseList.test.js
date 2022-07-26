const reverseList = require('./kata')

test("works", () => {
    expect(reverseList([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});
test("works perfectly", () => {
    expect(reverseList([])).toEqual([]);
});

test("works just fine", () => {
    expect(reverseList([1, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 1]);
});

