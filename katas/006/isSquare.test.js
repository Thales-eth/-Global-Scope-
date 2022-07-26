const isSquare = require('./kata')

test("works", () => {
    expect(isSquare(625)).toBe(true);
});
test("works perfectly", () => {
    expect(isSquare(121)).toBe(true);
});

test("works just fine", () => {
    expect(isSquare(25)).toBe(true);
});


test("works just fine", () => {
    expect(isSquare(26)).toBe(false);
});

