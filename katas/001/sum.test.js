const sum = require('./kata')

test("test 1", () => {
    expect(sum(1, 5)).toBe(6);
});
test("test 2", () => {
    expect(sum(2, 5)).toBe(7);
});

test("test 3", () => {
    expect(sum(3, 5)).not.toBe(7);
});