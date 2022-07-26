const getEven = require('./kata')

test("works", () => {
    expect(getEven(2)).toBe('Even');
});
test("works perfectly", () => {
    expect(getEven(222)).toBe('Even');
});

test("works just fine", () => {
    expect(getEven(333)).toBe('Odd');
});

test("works just fine", () => {
    expect(getEven(0)).toBe('Even');
});