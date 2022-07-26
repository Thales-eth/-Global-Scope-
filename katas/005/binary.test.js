const countBits = require('./kata')

test("works", () => {
    expect(countBits(0)).toBe(0);
});
test("works perfectly", () => {
    expect(countBits(4)).toBe(1);
});

test("works just fine", () => {
    expect(countBits(7)).toBe(3);
});

