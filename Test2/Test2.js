/** 
Write a program that outputs sequentially the integers from 1 to 99 but on some conditions
prints a string instead:
● when the integer is a multiple of 3 print “Open” instead of the number,
● when it is a multiple of 7 print “Source” instead of the number,
● when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.
**/

const checkCondition = () => {
  for (let number = 1; number <= 99; number++) {
    if (number % 3 === 0) {
      console.log('Open');
    } else if (number % 7 === 0) {
      console.log('Source');
    } else if (number % 3 && number % 7 === 0) {
      console.log('OpenSource');
    } else {
      console.log(number);
    }
  }
};

checkCondition();
