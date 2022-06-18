/*Write a regular expression to match strings containing 
both "Softeq" and "#rules" in any order.
 */

const expression = new RegExp('Softeq.*#rules|#rules.*Softeq');
console.log(expression.test('Softeq has several #rules')); //prints true
console.log(expression.test('I abide by the #rules of Softeq')); //prints true
