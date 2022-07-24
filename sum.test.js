const sum = require('./sum')

test("works", () => {
    expect(sum(1, 5)).toBe(6);
});
test("works perfectly", () => {
    expect(sum(2, 5)).toBe(7);
});

test("works just fine", () => {
    expect(sum(3, 5)).not.toBe(7);
});
