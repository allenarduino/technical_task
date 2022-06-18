/** 
Write a program that outputs sequentially the integers from 1 to 99 but on some conditions
prints a string instead:
● when the integer is a multiple of 3 print “Open” instead of the number,
● when it is a multiple of 7 print “Source” instead of the number,
● when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.
**/

function checkCondition() {
  for (let number = 1; number <= 99; number++) {
    switch (true) {
      case number % 3 === 0:
        console.log('Open');
        break;
      case number % 7 === 0:
        console.log('Source');
        break;
      case number % 3 === 0 && number % 7 === 0:
        console.log('OpenSource');
      default:
        console.log(number);
        break;
    }
  }
}

checkCondition();
