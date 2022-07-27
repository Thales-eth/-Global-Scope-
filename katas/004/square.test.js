const getArea = require('./kata')

test("test 1", () => {
    expect(getArea(2)).toBe(1.62);
});
test("test 2", () => {
    expect(getArea(0)).toBe(0.00);
});

test("test 3", () => {
    expect(getArea(14.05)).toBe(80.00);
});

