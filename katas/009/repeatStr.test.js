const repeatStr = require('./kata')

test("test 1", () => {
    expect(repeatStr(3, "*")).toEqual('***');
});

test("test 2", () => {
    expect(repeatStr(5, "#")).toEqual("#####");
});

test("test 3", () => {
    expect(repeatStr(2, "ha ")).toEqual("ha ha ");
});

