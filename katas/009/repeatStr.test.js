const repeatStr = require('./kata')

test("works perfectly", () => {
    expect(repeatStr(3, "*")).toEqual('***');
});

test("works just fine", () => {
    expect(repeatStr(5, "#")).toEqual("#####");
});

test("works Great!", () => {
    expect(repeatStr(2, "ha ")).toEqual("ha ha ");
});

