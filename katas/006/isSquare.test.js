const isSquare = require('./kata')

test("test 1", () => {
    expect(isSquare(625)).toBe(true);
});
test("test 2", () => {
    expect(isSquare(121)).toBe(true);
});

test("test 3", () => {
    expect(isSquare(25)).toBe(true);
});


test("test 4", () => {
    expect(isSquare(26)).toBe(false);
});

