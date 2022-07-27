const validParentheses = require('./kata')

test("test 1", () => {
    expect(validParentheses('(')).toEqual(false);
});
test("test 2", () => {
    expect(validParentheses('()')).toEqual(true);
});

test("test 3", () => {
    expect(validParentheses('(())')).toEqual(true);
});

test("test 4", () => {
    expect(validParentheses('(((())))')).toEqual(true);
});
