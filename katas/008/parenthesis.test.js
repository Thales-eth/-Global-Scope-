const validParentheses = require('./kata')

test("works", () => {
    expect(validParentheses('(')).toEqual(false);
});
test("works perfectly", () => {
    expect(validParentheses('()')).toEqual(true);
});

test("works just fine", () => {
    expect(validParentheses('(())')).toEqual(true);
});

test("works Great!", () => {
    expect(validParentheses('(((())))')).toEqual(true);
});
