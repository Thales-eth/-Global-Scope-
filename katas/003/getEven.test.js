const getEven = require('./kata')

test("test 1", () => {
    expect(getEven(2)).toBe('Even');
});
test("test 2", () => {
    expect(getEven(222)).toBe('Even');
});

test("test 3", () => {
    expect(getEven(333)).toBe('Odd');
});

test("test 4", () => {
    expect(getEven(0)).toBe('Even');
});