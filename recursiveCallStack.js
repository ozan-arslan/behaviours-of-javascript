// Having some issues while understanding the call stack.
/* Alright. The biggest issue I was having is that why is "+" operator is behaving like concatenator instead of addition operator.
It was because the both values next to "+" are numbers until they weren't which is the base case. So this implies that(according to my understanding of course) javascript doesn't
execute this code until the recursive call ends. These recursive calls are chained by javascript engine before getting executed which is named "call stack".
Javascript engine throws a boomerang; it stacks the recursive calls while boomerang goes away, then executes the code while boomerang comes back. If the boomerang is thrown too hard,
it eventually escapes the gravitational pull and causes stackoverflow. Or, stackoverFLEW. Hah, hahah. Okay.
*/

const decimalToBinary = (input) => {
  if (input === 0) {
    return "";
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
