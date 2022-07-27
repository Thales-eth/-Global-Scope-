const mult = require('./kata')

test("test 1", () => {
    expect(mult(1, 5)).toBe(5);
});
test("test 2", () => {
    expect(mult(2, 5)).toBe(10);
});

test("test 3", () => {
    expect(mult(33, 3)).toBe(99);
});