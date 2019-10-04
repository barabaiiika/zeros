module.exports = function zeros(expression) {
  const operands = expression.split('*');
  let sumFive = 0;
  let sumTwo = 0;
  for (const operand of operands) {
    const arr =  zeroSumForOneOperand(parseInt(operand, 10), operand.includes('!!'));
    sumFive += arr[0];
    sumTwo += arr[1];
  }

  return (Math.min(sumFive, sumTwo));
}


function zeroSumForOneOperand(number, doubleFactorial = false) {
  let counterFive = 0;
  let counterTwo = 0;
  for (
        let i = (!(number % 2) && doubleFactorial) ? 2 : 1 ;
        i <= number;
        i += (doubleFactorial ? 2 : 1)
      ) {
          counterFive += getSumNumber(i, 5);
          counterTwo += getSumNumber(i, 2); 
  }
  return [counterFive, counterTwo];
}

function getSumNumber(number, base) {
  if (number % base) {
    return 0;
  } else {
    return 1 + getSumNumber(number / base, base);
  }
}