const balancedParens = require('./kata')

test("test 1", () => {
    expect(balancedParens(0)).toEqual([""]);
});
test("test 2", () => {
    expect(balancedParens(1)).toEqual(["()"]);
});
test("test 3", () => {
    expect(balancedParens(2)).toEqual(["(())", "()()"]);
});
test("test 4", () => {
    expect(balancedParens(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
});

