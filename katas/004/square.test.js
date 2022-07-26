const getArea = require('./kata')

test("works", () => {
    expect(getArea(2)).toBe(1.62);
});
test("works perfectly", () => {
    expect(getArea(0)).toBe(0.00);
});

test("works just fine", () => {
    expect(getArea(14.05)).toBe(80.00);
});

