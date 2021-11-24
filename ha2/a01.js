function multiply(number1, number2 = 1) {
  return number1 * number2;
}

function multiplyAll() {
  let numbers = Object.values(arguments);
  let product = 1;

  for (i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  return product;
}
