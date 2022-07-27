const countBits = require('./kata')

test("test 1", () => {
    expect(countBits(0)).toBe(0);
});
test("test 2", () => {
    expect(countBits(4)).toBe(1);
});

test("test 3", () => {
    expect(countBits(7)).toBe(3);
});

