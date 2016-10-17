//*** UNIT TEST ********************************************************************
//*** this should go a separate file ***********************************************
var assert = require("assert"),
    testExpression = "5+2*7",
    calc = new Calc(testExpression);

function testCalc(exp) {
    return eval(calc.sanitize(exp));
}

console.log("Test Result:", testCalc(testExpression));
console.log("Actual Result:", calc.parse());

//assertion
assert.ok(calc.sanitize("1a+b2/3c") === "1+2/3", "The input expression should be sanitized");
assert.ok(testCalc(testExpression) === calc.parse(), "The calculation result should be correct");