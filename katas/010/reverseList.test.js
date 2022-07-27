const reverseList = require('./kata')

test("test 1", () => {
    expect(reverseList([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});
test("test 2", () => {
    expect(reverseList([])).toEqual([]);
});

test("test 3", () => {
    expect(reverseList([1, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 1]);
});

