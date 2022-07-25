const mult = require('./kata')

test("works", () => {
    expect(mult(1, 5)).toBe(5);
});
test("works perfectly", () => {
    expect(mult(2, 5)).toBe(10);
});

test("works just fine", () => {
    expect(mult(33, 3)).toBe(99);
});